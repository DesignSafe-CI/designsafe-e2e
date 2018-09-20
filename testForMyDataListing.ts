import { Selector } from 'testcafe';

fixture `My Data Listing`
  .page`https://designsafeci-dev.tacc.utexas.edu/`;

const dropdown = Selector('.btn-group').withText('Log in');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const dataDepotNavBarPublished = Selector('.ng-scope').withAttribute('ng-switch-when','publicData');
const publishedListing = Selector('tr');

test('My Data Listing', async t => {
  await t
    .click(dropdown)
    .click(dropdownMenuDataDepot)
    .click(dataDepotNavBarPublished)

  const tableCount = await publishedListing.count;
  await t
    .expect(tableCount).gt(0, 'No items in My Data listing')
    .expect(tableCount).lt(25, 'More than 25 items in My Data listing');
}); 