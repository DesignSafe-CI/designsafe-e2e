import { Selector } from 'testcafe';
import { BASE_URL, USERNAME, PASSWORD } from '../config';  // Loads variables from config.ts

// Loads DesignSafe staging page
let f = fixture`My Data Listing`;
f.page(BASE_URL);

// Sets elements that will be used during test execution
const loginButton = Selector('.btn-group').find('a').withText('Log in');
const dropdown = Selector('.dropdown').withText('Research Workbench');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const myDataListing = Selector('tr');

// test begins
test('My Data Listing', async t => {
  // Clicks login button on home page
  await t
    .click(loginButton);  
  
  // Enters username and password set in config.js and clicks login button
  await t
    .typeText('#username', USERNAME)
    .typeText('#password', PASSWORD) 
    .click('#login-btn');
  
  // If the user account needs approval, uncomment the line of code below.  
  // This will usually only need to be used the first login.
  /* await t
    .click('#approveAlways'); */

  //Navigates through navbar ribbon and selects Data Depot
  await t
    .click(dropdown)
    .click(dropdownMenuDataDepot)

  // Counts entries on My Data file listing and checks that there are
  // less the count is less than or equal to 25 rows
  const tableCount = await myDataListing.count;
  await t.expect(tableCount).lte(25, 'More than 25 items in My Data listing');
}); 