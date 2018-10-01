import { Selector } from 'testcafe';

fixture `My Data Listing`
  .page`https://designsafeci-dev.tacc.utexas.edu/`;

const loginButton = Selector('.btn-group').find('a').withText('Log in');
const dropdown = Selector('.dropdown');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const dataDepotNavBarPublished = Selector('.ng-scope').withAttribute('ng-switch-when','publicData');
const publishedListing = Selector('tr');

test('My Data Listing', async t => {
  await t
    .click(loginButton);
  
  await t
    .typeText('#username', 'XYZ') // Replace XYZ with your test user's username
    .typeText('#password', 'XYZ') // Replace XYZ with your test user's password
    .click('#login-btn');
  
  // If the user account needs approval, uncomment the line of code below.  
  // This will usually only need to be used the first login.
  /* await t
    .click('#approveAlways'); */

  await t
    .click(dropdown)
    .click(dropdownMenuDataDepot)
    .click(dataDepotNavBarPublished);

  const tableCount = await publishedListing.count;
  await t
    .expect(tableCount).gt(0, 'No items in My Data listing')
    .expect(tableCount).lt(25, 'More than 25 items in My Data listing');
}); 