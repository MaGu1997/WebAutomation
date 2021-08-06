const Page = require("./page");
const elementUtil = require("../util/elementUtil");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SalePage extends Page {
  /**
   * define selectors using getter methods
   */

  get filterButton() {
    return $("#narrow-by-list > dd:nth-child(24) > ol > li:nth-child(1) > a");
  }
  get filterApplied() {
    return $(
      '//*[@id="top"]/body/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/div[1]/ol/li/span[2]'
    );
  }

  getSalePageTitle() {
    return elementUtil.doGetPageTitle();
  }
  clickFilterButton() {
    this.filterButton.scrollIntoView();
    elementUtil.doClick(this.filterButton);
  }
  checkFilterUrl() {
    return elementUtil.doGetPageUrl();
  }
  getFilterText() {
    return this.filterApplied.getText();
  }
}

module.exports = new SalePage();
