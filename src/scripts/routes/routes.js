import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorited from '../views/pages/restaurant-favorited';

const routes = {
  '/': RestaurantList, // default page
  '/restaurant-list': RestaurantList,
  '/restaurant-detail/:id': RestaurantDetail,
  '/restaurant-favorited': Favorited,
};

export default routes;
