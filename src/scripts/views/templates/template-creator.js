import CONFIG from '../../globals/config';

const restaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h4>Address</h4>
    <p>${restaurant.address}, Kota ${restaurant.city}</p>
    <h4>Category</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__review">
    <h3>Reviews</h3>
    <div class="reviewer-list">
      ${restaurant.customerReviews.map((review) => `
        <div class="reviewer-info">
          <h4><i class="fa fa-address-book" aria-hidden="true"></i> ${review.name},</h4>
          <p>On ${review.date}</p>
          <p>Says "${review.review}"</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const restaurantListTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" loading=”lazy” alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__location">
        <p><span class="restaurant-item__header__location__city">${restaurant.city} </span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.description}</p>
      <p>Rating : ⭐️ ${restaurant.rating}</p>
      <a href="/#/restaurant-detail/${restaurant.id}" aria-label="find out more about ${restaurant.name}">Find Out More!</a>
    </div>

  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyFavoritedTemplate = () => `
  <div class="empty-favorited">
    <h2>
      Hmm... It Looks Like Currently You Don't Have Any Favorited Restaurant Yet,<br>
      Why Don't We Find One Now!<br>
      Click Home Button To Go To The Home Page.
    </h2>
    <img src="./images/empty-favorited-img.png" class="empty-favorited__image" alt="No Favorited Illustration">
  </div>
`;

const createReviewTemplate = (restaurant) => `
  <div class="add-review__data">
    <h3>Have been in <q>${restaurant.name}</q> before? Why not leave a Review then!</h3>
    <div class="form-group">
      <label for="inputReviewerName">Enter Your Name</label><br>
      <input id="inputReviewerName" type="text" class="form-control" placeholder="Your Beautiful Name Goes Here..." required>
    </div>
    <div class="form-group">
      <label for="inputReviewerComment">What's On Your Mind?</label><br>
      <textarea id="inputReviewerComment" type="text" class="form-control" placeholder="Your Beautiful Comment Goes Here..." required></textarea>
    </div>
    <div class="form-group">
      <button aria-label="send your comment" id="sendReview" class="btn btn-success">Send It!</button>
    </div>
  <div>
`;

export {
  restaurantDetailTemplate,
  restaurantListTemplate,
  createReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createEmptyFavoritedTemplate,
};
