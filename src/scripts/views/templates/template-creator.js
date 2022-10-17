import CONFIG from '../../globals/config';

const restaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
  <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}">
        <img class="restaurant__poster skeleton-image skeleton-effect-fade" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}'s image">
  </picture>
  <div class="restaurant__info">
    <h4>Address</h4>
    <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.address}, Kota ${restaurant.city}</p>
    <h4>Category</h4>
    <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.description}</p>
  </div>
  <div class="restaurant__review">
    <h3 tabindex="0">Reviews</h3>
    <div class="reviewer-list">
      ${restaurant.customerReviews.map((review) => `
        <div class="reviewer-info skeleton-text skeleton-effect-fade">
          <h4 tabindex="0"><i class="fa fa-user user-icon" aria-hidden="true"></i>   Mr. / Ms. ${review.name},</h4>
          <p tabindex="0"><i class="fa fa-calendar calendar-icon" aria-hidden="true"></i>   On : ${review.date}</p>
          <p tabindex="0">Says "${review.review}"</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const restaurantListTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMOLL + restaurant.pictureId}">
        <img 
          class="restaurant-item__header__poster lazyload skeleton-image skeleton-effect-fade" 
          width="400" height="200"  src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}'s image"
        >
      </picture>
      <div class="restaurant-item__header__location">
        <p><span class="restaurant-item__header__location__city">
          ${restaurant.city}   
          <i class="fa fa-map-marker location-icon" aria-hidden="true"></i> 
        </span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.name}</h3>
      <p tabindex="0" class="skeleton-text skeleton-effect-fade">${restaurant.description}</p>
      <p tabindex="0" class="skeleton-text skeleton-effect-fade">Rating : ⭐️ ${restaurant.rating}</p>
      <h4 class="detail-button"><a href="/#/restaurant-detail/${restaurant.id}" aria-label="find more about ${restaurant.name}">Find Out More!</a></h4>
    </div>
  </div>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoritedRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyFavoritedTemplate = () => `
  <div class="empty-favorited">
    <h2 class="restaurant-item__not__found">
      Hmm... It Looks Like Currently You Don't Have Any Favorited Restaurant Yet,<br>
      Why Don't We Find One Now!<br>
      Click Home Button To Go To The Home Page.
    </h2>
    <img width="500" height="389" src="./images/empty-favorited-img.png" class="empty-favorited__image" alt="No Favorited Illustration">
  </div>
`;

const createReviewTemplate = (restaurant) => `
  <div class="add-review__data">
    <h3 tabindex="0">Have been in <q>${restaurant.name}</q> before? Why not leave a Review then!</h3>
    <div class="form-group">
      <label for="inputReviewerName">Enter Your Name</label><br>
      <input id="inputReviewerName" type="text" class="form-control" placeholder="Your Beautiful Name Goes Here..." required>
    </div>
    <div class="form-group">
      <label for="inputReviewerComment">What's On Your Mind?</label><br>
      <textarea id="inputReviewerComment" type="text" class="form-control" placeholder="Your Beautiful Comment Goes Here..." required></textarea>
    </div>
    <div class="form-group review-buttons">
      <button aria-label="send your comment" id="sendReview" class="btn btn-success">Send It!</button>
    </div>
  <div>
`;

export {
  restaurantDetailTemplate,
  restaurantListTemplate,
  createReviewTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoritedRestaurantButtonTemplate,
  createEmptyFavoritedTemplate,
};
