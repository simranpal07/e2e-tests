import { browser, by, element, protractor } from "protractor";
import { Given, When, Then } from "cucumber";
import { expect } from "chai";

import { AirBnbPageObject } from "../pages/airBnbPage";
import { config } from "../config/config";
import { Log } from "../logger";

import * as testData from "../config/testData.json";

const airBnbPo: AirBnbPageObject = new AirBnbPageObject();
const logger: Log = new Log();
let EC = protractor.ExpectedConditions;


Given(/^User launch the air bnb application and accept cookies for the session$/, async () => {
    const expectedTitleHomePage = testData.homePageTitle;
    logger.info(`currently tests are running in following URL: ${config.baseUrlAirBnb}`);
    await browser.driver.get(config.baseUrlAirBnb);
    await browser.wait(EC.visibilityOf(await airBnbPo.acceptCookiesButton), 50000);   
    await airBnbPo.acceptCookiesButton.click()
    await browser.wait(EC.invisibilityOf(await airBnbPo.acceptCookiesButton), 50000);
    // To validate title
    const actualTitleHomePage = await browser.getTitle();
    expect(actualTitleHomePage).to.equal(expectedTitleHomePage);
});

When(/^User login to the application with email "(.*?)" and password "(.*?)"$/, async (email, password) => {
    await airBnbPo.navigationMenu.click();
    await browser.wait(EC.visibilityOf(airBnbPo.loginLink), 50000);  
    await airBnbPo.loginLink.click();
    await browser.wait(EC.visibilityOf(airBnbPo.loginModal), 50000);
    await browser.wait(EC.visibilityOf(airBnbPo.continueWithEmail), 50000); 
    await airBnbPo.continueWithEmail.click();
    await browser.wait(EC.presenceOf(airBnbPo.emailField), 50000); 
    await airBnbPo.emailField.sendKeys(email);
    await airBnbPo.passwordField.sendKeys(password);
    await airBnbPo.loginButton.click(); 
});


Then(/^User verify the user is successfully logged in air bnb app$/, async () => {
    await browser.wait(EC.visibilityOf(airBnbPo.notificationIcon), 50000);
});

Then(/^User search for a stay in location "(.*?)" with valid dates for 1 adult$/, async (key) => {
    // This is used to scroll to the top of page
    const locationToSearch = testData[key]
    await browser.actions().sendKeys(protractor.Key.HOME).perform();
    await browser.wait(EC.visibilityOf(airBnbPo.locationNavBar), 50000);
    await airBnbPo.locationNavBar.click();
    await airBnbPo.locationNavBar.sendKeys(locationToSearch);
    await browser.wait(EC.visibilityOf(airBnbPo.firstLocationInlist), 50000);
    await airBnbPo.firstLocationInlist.click();
    const todaysDate = await getCurrentDate();
    await browser.wait(EC.visibilityOf(element(by.css(`[data-testid='datepicker-day-${todaysDate}'] div`))), 50000);
    await element(by.css(`[data-testid='datepicker-day-${todaysDate}']`)).click();
    await browser.wait(EC.visibilityOf(element(by.css(`[data-testid='datepicker-day-${todaysDate}'] div`))), 50000);
    await element(by.css(`[data-testid='datepicker-day-${todaysDate}']`)).click();
    await airBnbPo.guestsNavBar.click();
    await browser.wait(EC.visibilityOf(airBnbPo.increaseAdultButton), 50000);
    await airBnbPo.increaseAdultButton.click();
    await airBnbPo.searchButton.click();
});

async function getCurrentDate() {
    const currentdate = new Date();
    const date = currentdate.getDate();
    const strDate = '0' + date;
    const month = currentdate.getMonth() + 1;
    const strMonth = '0' + month;
    let year = currentdate.getFullYear();
    return [year, strMonth, strDate].join('-');
}

Then(/^User Verify the stay list appear in the application$/, async () => {
    const expectedTitleListPage = testData.stayListTitle;
    await browser.wait(EC.visibilityOf(airBnbPo.priceFilterButton), 50000);
    const actualTitleListPage = await browser.getTitle();
    expect(actualTitleListPage.trim()).to.equal(expectedTitleListPage);
});

Then(/User Selects the hotel present in the application$/, async () => {
    const minimumPriceToSearch = testData.minimumPrice;
    await airBnbPo.priceFilterButton.click();
    await browser.wait(EC.visibilityOf(airBnbPo.maxPriceFilter), 50000);
    await airBnbPo.maxPriceFilter.click();
    await airBnbPo.maxPriceFilter.sendKeys(protractor.Key.CONTROL,'a');
    await airBnbPo.maxPriceFilter.sendKeys(protractor.Key.DELETE);
    await airBnbPo.maxPriceFilter.sendKeys(minimumPriceToSearch);
    await airBnbPo.saveButton.click();
    const elementPriceUpto = element(by.xpath(`//span[text()='Up to ₹${testData.minimumPrice}']`));
    await browser.wait(EC.visibilityOf(elementPriceUpto), 50000);
    await browser.wait(EC.visibilityOf(airBnbPo.firstStayInList), 50000);
    await airBnbPo.firstStayInList.click();
});



