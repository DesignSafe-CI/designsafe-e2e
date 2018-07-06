# Integration Tests for DesignSafe
### This is the repository for integration tests for [DesignSafe](https://www.designsafe-ci.org/).  

### All tests run using [TestCafe](http://devexpress.github.io/testcafe/).  
#### Installing TestCafe
To install TestCafe, use npm:
`npm install --save-dev testcafe`

For more details, read the [TestCafe Installation instructions](http://devexpress.github.io/testcafe/documentation/using-testcafe/installing-testcafe.html).

#### To run TestCafe tests:

`testcafe [browser] [directory or file] [options]`

`testcafe chrome testForCommunityDataListing.ts -e`

TestCafe uses your real browser, so any testing browser must be installed first.  Use the `-e` option to ignore any irrelevant JavaScript errors that appear and cause the test to fail.  For more information, read the documentation on the [TestCafe CLI](http://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html).
