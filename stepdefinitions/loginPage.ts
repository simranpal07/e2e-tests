import { browser, protractor } from "protractor";
import { Given, When, Then } from "cucumber";
import { expect } from "chai";

import { LoginPageObject } from "../pages/loginPage";
import { config } from "../config/config";
import { Log } from "../logger";

const loginPo: LoginPageObject = new LoginPageObject();
const logger: Log = new Log();

Given(/^I launch application url under test$/, async () => {
    browser.ignoreSynchronization = true;
    logger.info(`currently tests are running in following URL: ${config.baseUrl}`);
    await browser.driver.get(config.baseUrl);
});

Then(/^I wait for application to be displayed$/, async () => {
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(loginPo.userName), 50000);
});

When(/^I type username "(.*?)"$/, async (userName) => {
    await loginPo.userName.sendKeys(userName);
});

When(/^I type password "(.*?)"$/, async (password) => {
    await loginPo.password.sendKeys(password);
});

When(/^I type username Description "(.*?)"$/, async (userNameDescription) => {
    await loginPo.userNameDescription.sendKeys(userNameDescription);
});

Then(/^I click on submit button$/, async () => {
    await loginPo.loginButton.click();
});

Then(/^I verify user is successfully logged in$/, async () => {
    let elementPresentStatus:boolean;
    elementPresentStatus = await browser.wait( async function() {
        return browser.isElementPresent(loginPo.homeTitle);
    }, 20000);
    expect(elementPresentStatus).to.equal(true);
});

Then(/^I logout from the application$/, async () => {
    await loginPo.logoutLink.click();
});
