import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { restaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoritedRestaurantIdb from '../../data/favorited-restaurant-idb';

const RestaurantDetail = {
  async render() {
    return `
      <h2 class="main-title">Here's Details Of the Restaurant :</h2>
      <div id="restaurant" class="restaurant"></div>
      <div id="addReview" class="add-review"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailOfRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const reviewContainer = document.querySelector('#addReview');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
    reviewContainer.innerHTML = createReviewTemplate(restaurant);

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoritedRestaurant: FavoritedRestaurantIdb,
      restaurant: {
        id: url.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    // Add New Reviewer
    const buttonSendReview = document.querySelector('#sendReview');
    const reviewerName = document.querySelector('#inputReviewerName');
    const reviewerComment = document.querySelector('#inputReviewerComment');
    const restaurantId = restaurant.id;

    buttonSendReview.addEventListener('click', async () => {
      if (reviewerName.value === '' || reviewerComment.value === '') {
        alert('Please Fill Your Name ANd Comment Form Before Sending!');
      } else {
        const review = {
          id: restaurantId,
          name: reviewerName.value,
          review: reviewerComment.value,
        };
        const sendReview = await RestaurantSource.addReview(review);
        console.log(sendReview);
        alert('Comment Has Been Added! Please Hard-Refresh To See The Changes');
        reviewerName.value = '';
        reviewerComment.value = '';
      }
    });
  },
};

export default RestaurantDetail;
