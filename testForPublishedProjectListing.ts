import { Selector } from 'testcafe';

fixture `Published Project Listing`
  .page`https://designsafeci-dev.tacc.utexas.edu/`;

const dropdown = Selector('.dropdown');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const dataDepotNavBarPublished = Selector('.ng-scope').withAttribute('ng-switch-when','publicData');
const publishedListing = Selector('tr');

test('Published Project Listing', async t => {
  await t
    .click(dropdown)
    .click(dropdownMenuDataDepot)
    .click(dataDepotNavBarPublished)

  const tableCount = await publishedListing.count;
  await t
    .expect(tableCount).gt(0, 'No items in Published listing')
    .expect(tableCount).lt(25, 'More than 25 items in Communitry Data listing');
}); 