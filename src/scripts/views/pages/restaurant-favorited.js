import FavoritedRestaurantIdb from '../../data/favorited-restaurant-idb';
import { createEmptyFavoritedTemplate, restaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h2 class="main-title" tabindex="0" >Here's Your Favorited Restaurants :</h2>
        <div id="restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoritedRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantListTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML += createEmptyFavoritedTemplate();
      restaurantsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
  },
};

export default Favorite;
