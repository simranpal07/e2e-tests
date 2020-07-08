import * as path from "path";
import { browser, Config } from "protractor";
import * as fs from "fs";

import { Reporter } from "../support/reporter";

import { baseUriForService } from "./uri";

const suiteName = process.argv[3].substring(8);
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");

export const config: Config = {

    // seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: `http://www.way2automation.com/angularjs-protractor/registeration/#/login`,
    baseUrlTest: `https://xxx${process.env.ENVIRONMENT}.com`,

    getEndPointUri: `https://xxxxxxxxxxxxxx/api/v1/getEndpoint`,
    postEndPointUri: `https://xxxxxxxxxxxxxx/api/v1/postEndpoint`,
    putEndPointUri: `https://xxxxxxxxxxxxxx/api/v1/putEndpoint`,
    tokenUri: 'https://xxxxxxxxxxxxxxxx/oauth/token?',
    clientId: 'give Client Id',
    clientSecret: 'give client Secret',
    
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
        args: ['no-sandbox','disable-gpu','window-size=1920,1080'],
        }
    },
    allScriptsTimeout: 250000,
    // How long to wait for a page to load.
    getPageTimeout: 650000,
    defaultTimeoutInterval :60000,

    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),   

    specs: [],
   

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(50000);
        browser.manage().timeouts().implicitlyWait(1000);
        if(!fs.existsSync(path.join(jsonReports,suiteName))) {
            fs.mkdirSync(path.join(jsonReports,suiteName));
        }
        if(!fs.existsSync(path.join(htmlReports,suiteName))) {
            fs.mkdirSync(path.join(htmlReports,suiteName));
        }
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: [`json:./reports/json/${suiteName}/cucumber_report.json`],
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        'fail-fast': true,
        strict: true,
    },

    onComplete: () => {
        Reporter.createHTMLReport(suiteName, jsonReports, htmlReports);
    },

    suites: {
        Suite1:[
            '../../features/login.feature',
        ],
        Suite2:[
            '../../features/login.feature',
            '../../features/xxxxxx.feature'
        ],

        Suite3: [
            '../../features/loginNewUser.feature',
            '../../features/xxxxxx.feature'
        ]
    }
};
