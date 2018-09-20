import { Selector } from 'testcafe';
import {BASE_URL} from '../config';

let f = fixture `Community Data Listing`;
f.page(BASE_URL);

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
    .expect(tableCount).lt(1000, 'More than 1000 items in Communitry Data listing');
});
