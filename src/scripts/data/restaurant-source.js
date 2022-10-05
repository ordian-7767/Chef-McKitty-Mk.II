import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listOfRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailOfRestaurant(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response;
  }
}

export default RestaurantSource;
