import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoritedRestaurantIdb from '../../src/scripts/data/favorited-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoritedRestaurant: FavoritedRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
