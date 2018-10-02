import { Selector } from 'testcafe';

fixture `My Data Listing`
  .page`https://designsafeci-dev.tacc.utexas.edu/`;

const loginButton = Selector('.btn-group').find('a').withText('Log in');
const dropdown = Selector('.dropdown').withText('Research Workbench');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const myDataListing = Selector('tr');

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

  const tableCount = await myDataListing.count;
  await t.expect(tableCount).lte(25, 'More than 25 items in My Data listing');
}); 