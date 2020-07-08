import { element, by, ElementFinder } from "protractor";

export class LoginPageObject {
    public userName: ElementFinder;
    public password: ElementFinder;
    public userNameDescription: ElementFinder;
    public loginButton: ElementFinder;
    public homeTitle: ElementFinder;
    public logoutLink: ElementFinder;

    constructor() {
        this.userName = element(by.id("username"));
        this.password = element(by.id("password"));
        this.userNameDescription = element(by.id("formly_1_input_username_0"));
        this.loginButton = element(by.xpath("//button[text()[normalize-space()='Login']]"))
        this.homeTitle = element(by.xpath("//h1[text()='Home']"))
        this.logoutLink = element(by.xpath("//a[text()='Logout']"));
    }
}