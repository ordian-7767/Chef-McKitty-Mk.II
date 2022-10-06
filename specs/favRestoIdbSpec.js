import { itActsAsFavoriteRestaurantModel } from './contract/favRestoContract';
import FavoritedRestaurantIdb from '../src/scripts/data/favorited-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoritedRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoritedRestaurantIdb.removeRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoritedRestaurantIdb);
});
