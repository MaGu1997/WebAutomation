const SalePage = require("../pageobjects/sale.page");
const constants = require("../constants");
const elementUtil = require("../util/elementUtil");

describe("Sale page feature test", () => {
  //Check if reached on Sale Page
  it("verify sale landing page", () => {
    const title = SalePage.getSalePageTitle();
    assert.equal(constants.SALE_PAGE_TITLE, title, "Not on Sales Page");
  });

  //Set the sale filter and verify by the redirected url
  it("setting sale filter", () => {
    SalePage.clickFilterButton();
    const filterUrl = SalePage.checkFilterUrl();
    assert.equal(filterUrl, constants.SALE_FILTERED_PAGE_URL);
  });

  //Validate if filter set by checking Filters list
  it("validating if filter applied correctly", () => {
    const filterText = SalePage.getFilterText();
    assert.equal(filterText, constants.FILTERED_AMOUNT, "filter not applied");
  });
});
