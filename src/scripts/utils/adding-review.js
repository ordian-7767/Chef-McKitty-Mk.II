import UrlParser from '../routes/url-parser';
import RestaurantSource from '../data/restaurant-source';

const AddingReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const restaurant = await RestaurantSource.detailOfRestaurant(url.id);

  const reviewerName = document.querySelector('#inputReviewerName');
  const reviewerComment = document.querySelector('#inputReviewerComment');

  const buttonSendReview = document.querySelector('#sendReview');
  buttonSendReview.addEventListener('click', async () => {
    if (reviewerName.value === '' || reviewerComment.value === '') {
      alert('Please Make Sure Both Name & Comment Form Are Filled Before Sending!');
    } else {
      const review = {
        id: restaurant.id,
        name: reviewerName.value,
        review: reviewerComment.value,
      };
      const sendReview = await RestaurantSource.addReview(review);
      console.log(sendReview);
      alert('Comment Has Been Added! Wait For A Moment To See The Changes');
      reviewerName.value = '';
      reviewerComment.value = '';
      window.location.reload(true);
    }
  });
};

export { AddingReview };
