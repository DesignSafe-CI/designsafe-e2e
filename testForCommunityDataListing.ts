import { Selector } from 'testcafe';

fixture `Community Data Listing`
  .page`https://designsafeci-dev.tacc.utexas.edu/`;

const dropdown = Selector('.dropdown');
const dropdownMenuDataDepot = dropdown.find('li').withText('Data Depot');
const dataDepotNavBarCommunityData = Selector('.ng-scope').withAttribute('ng-controller','DataDepotNavCtrl').withText('Community Data');
const communityDataListing = Selector('tr');

test('Community Data Listing', async t => {
  await t
    .click(dropdown)
    .click(dropdownMenuDataDepot)
    .click(dataDepotNavBarCommunityData)

  const tableCount = await communityDataListing.count;
  await t
    .expect(tableCount).gt(0, 'No items in Community Data listing')
    .expect(tableCount).lt(25, 'More than 25 items in Communitry Data listing');
}); 