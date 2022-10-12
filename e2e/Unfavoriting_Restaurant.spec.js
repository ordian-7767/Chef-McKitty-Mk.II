Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item');

  I.waitForInvisible('.page-loader', 10);
  I.click(locate('.detail-button a').first());

  I.waitForElement('#favoriteButton', 5);
  I.click('#favoriteButton');

  I.amOnPage('/#/restaurant-favorited');
  I.waitForElement('.restaurant-item', 5);
});

Scenario('unfavoriting a restaurant', ({ I }) => {
  I.amOnPage('/#/restaurant-favorited');
  I.waitForElement('.restaurant-item', 5);

  I.waitForElement('.restaurant-item');

  I.waitForInvisible('.page-loader', 10);
  I.click(locate('.detail-button a').first());

  I.waitForElement('#favoriteButton', 5);
  I.click('#favoriteButton');

  I.amOnPage('/#/restaurant-favorited');
  I.waitForElement('.empty-favorited', 5);
  I.see('Hmm... It Looks Like Currently You Don\'t Have Any Favorited Restaurant Yet,', '.restaurant-item__not__found');
});
