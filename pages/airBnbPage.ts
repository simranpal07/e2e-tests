import { element, by, ElementFinder } from "protractor";

export class AirBnbPageObject {
    public emailField: ElementFinder;
    public passwordField: ElementFinder;
    public acceptCookiesButton: ElementFinder;
    public navigationMenu: ElementFinder;
    public loginLink: ElementFinder;
    public loginModal: ElementFinder;
    public loginButton: ElementFinder;
    public locationNavBar: ElementFinder;
    public checkInNavBar: ElementFinder;
    public checkOutNavBar: ElementFinder;
    public guestsNavBar: ElementFinder;
    public increaseAdultButton: ElementFinder;
    public searchButton: ElementFinder;
    public continueWithEmail: ElementFinder;
    public notificationIcon: ElementFinder;
    public firstLocationInlist: ElementFinder;
    public maxPriceFilter: ElementFinder;
    public saveButton: ElementFinder;
    public priceFilterButton: ElementFinder;
    public firstStayInList: ElementFinder;

    constructor() {
        this.emailField = element(by.css("[data-testid='login-signup-email']"));
        this.passwordField = element(by.css("[data-testid='login-signup-password']"));
        this.acceptCookiesButton = element(by.css("button[data-testid='accept-btn']"));
        this.navigationMenu = element(by.css("[id='field-guide-toggle'] div"));
        this.loginLink = element(by.css("a[data-testid='cypress-headernav-login']"));
        this.loginModal = element(by.css("[aria-label='Log in']"));
        this.continueWithEmail = element(by.css("[data-testid='social-auth-button-email']"));
        this.loginButton = element(by.css("[data-testid='signup-login-submit-btn']"));
        this.locationNavBar = element(by.css("[id='bigsearch-query-detached-query']"));
        this.checkInNavBar = element(by.css("[data-testid='structured-search-input-field-split-dates-0']"));
        this.checkOutNavBar = element(by.css("[data-testid='structured-search-input-field-split-dates-1']"));
        this.guestsNavBar = element(by.css("[data-testid='structured-search-input-field-guests-button']"));
        this.increaseAdultButton = element(by.css("[data-testid='stepper-adults-increase-button']"));
        this.searchButton = element(by.css("button[data-testid='structured-search-input-search-button']"));        
        this.notificationIcon = element(by.css("[aria-label*='notification']"));
        this.firstLocationInlist = element(by.css("[id='Koan-query__option-0']> div>div"));
        this.priceFilterButton = element(by.css("[id='menuItemButton-price_range'] button"))
        this.maxPriceFilter = element(by.css('[id="price_filter_max"]'));
        this.saveButton = element(by.css("[id='filter-panel-save-button']"));
        this.firstStayInList = element(by.css("[itemprop='itemListElement']"));
    }
}