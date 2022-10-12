const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/restaurant-favorited');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.waitForElement('.empty-favorited', 5);
  I.see('Hmm... It Looks Like Currently You Don\'t Have Any Favorited Restaurant Yet,', '.restaurant-item__not__found');
});

Scenario('favoriting a restaurant', async ({ I }) => {
  I.see('Hmm... It Looks Like Currently You Don\'t Have Any Favorited Restaurant Yet,', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.restaurant-item');

  const firstRestaurantName = await I.grabTextFrom('.restaurant-item__content h3');
  I.waitForInvisible('.page-loader', 10);
  I.click(locate('.detail-button a').first());

  I.waitForElement('#favoriteButton', 5);
  I.click('#favoriteButton');

  I.amOnPage('/#/restaurant-favorited');
  I.waitForElement('.restaurant-item', 5);

  const favRestaurantName = await I.grabTextFrom('.restaurant-item__content h3');
  assert.strictEqual(firstRestaurantName, favRestaurantName);
});
