import { element, by, ElementFinder } from "protractor";

export class SamplePo {
    public userName: ElementFinder;

    constructor() {
        this.userName = element(by.id("yourLocator"));
    }
}