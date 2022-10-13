Feature('Adding New Review');

const reviewName = 'Jhon Doe';
const reviewComment = '.... . .-.. .-.. --- / .-- --- .-. -..';

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForInvisible('.page-loader', 10);
  I.click(locate('.detail-button a').first());
  I.waitForElement('.add-review');
});

Scenario('adding incomplete review to a restaurant', ({ I }) => {
  I.waitForElement('#inputReviewerName');
  I.fillField('#inputReviewerName', reviewName);

  I.click('#sendReview');

  I.wait(2);
  I.seeInPopup('Please Make Sure Both Name & Comment Form Are Filled Before Sending!');
  I.acceptPopup();
});

Scenario('adding complete review to a restaurant', ({ I }) => {
  I.waitForElement('#inputReviewerName');
  I.fillField('#inputReviewerName', reviewName);

  I.waitForElement('#inputReviewerComment');
  I.fillField('#inputReviewerComment', reviewComment);
  I.click('#sendReview');

  I.wait(2);
  I.seeInPopup('Comment Has Been Added! Wait For A Moment To See The Changes');
  I.acceptPopup();
});

Scenario('checking recently added review', ({ I }) => {
  I.refreshPage();
  I.waitForElement('.reviewer-info', 10);

  I.see(`Mr. / Ms. ${reviewName},`, '.reviewer-info h4');
  I.see(`Says "${reviewComment}"`, '.reviewer-info p');
});
