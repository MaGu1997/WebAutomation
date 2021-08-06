const LoginPage = require("../pageobjects/login.page");
const configData = require("../configData");
const constants = require("../constants");

describe("login page feature test", () => {

  //Check if landed on login page
  it("verify login page", () => {
    LoginPage.open();
    const title = LoginPage.getPageTitle();
    assert.equal(constants.LOGIN_PAGE_TITLE, title, "title is not found");
  });

  //Try email: "test@test.com", password: "ThisIs@T3st" for login
  it("logging in with username and password", () => {
    LoginPage.tryLogin(configData.email, configData.password);
  });

  //Check if Error occured while login
  it("login failed with an error", () => {
    const errorText = LoginPage.errorElementText();
    assert.equal(errorText, constants.LOGIN_ERROR_MESSAGE, "Login Successful");
  });

  // Try login with empty email and password fields
  it("login without credentials", () => {
    LoginPage.open();
    LoginPage.tryLogin("", "");
  });

  //See if Email Input validation is displayed
  it("checking for email input validation", () => {
    const emailText = LoginPage.emailValidationText();
    assert.equal(emailText, constants.VALIDATION_TEXT);
  });

  ///See if Password Input validation is displayed
  it("checking for password input validation", () => {
    const passwordText = LoginPage.passwordValidationText();
    assert.equal(passwordText, constants.VALIDATION_TEXT);
  });

  //Click on the View All Sale link in Sale Menu
  it("clicking on View All Sale", () => {
    const viewAllButtonText = LoginPage.getViewAll();
    assert.equal(viewAllButtonText, "View All Sale", "View all not clicked");
    LoginPage.goToViewAll();
  });
});
