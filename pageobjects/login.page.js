const Page = require("./page");
const elementUtil = require("../util/elementUtil");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#pass");
  }
  get loginButton() {
    return $("#send2");
  }
  get errorElement() {
    return $(".messages .error-msg li");
  }
  get emailValidationElement() {
    return $("#advice-required-entry-email");
  }
  get passwordValidationElement() {
    return $("#advice-required-entry-pass");
  }

  get saleButton() {
    return $("#nav > ol > li.level0.nav-5.parent > a");
  }

  get viewAllSaleButton() {
    return $(
      "#nav > ol > li.level0.nav-5.parent > ul > li.level1.view-all > a"
    );
  }

  //PAGE ACTIONS

  getPageTitle() {
    return elementUtil.doGetPageTitle();
  }
  errorElementText() {
    return this.errorElement.getText();
  }
  emailValidationText() {
    return this.emailValidationElement.getText();
  }
  passwordValidationText() {
    return this.passwordValidationElement.getText();
  }
  getViewAll() {
    this.saleButton.moveTo();
    return this.viewAllSaleButton.getText();
  }
  goToViewAll() {
    this.saleButton.moveTo();
    return elementUtil.doClick(this.viewAllSaleButton);
  }

  tryLogin(emailId, password) {
    elementUtil.doSetValue(this.inputEmail, emailId);
    elementUtil.doSetValue(this.inputPassword, password);
    elementUtil.doClick(this.loginButton);
  }
  /**
   * overwrite specifc options to adapt it to page object
   */

  open() {
    return super.open("customer/account/login/");
  }
}

module.exports = new LoginPage();
