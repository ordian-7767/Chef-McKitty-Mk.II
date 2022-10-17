import RestaurantSource from '../../data/restaurant-source';
import { restaurantListTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
        <h2 class="main-title" tabindex="0">Here's A Few Restaurants That You May Like :</h2>
        <div id="restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.listOfRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantListTemplate(restaurant);
    });
  },
};

export default RestaurantList;
