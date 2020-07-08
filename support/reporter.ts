import * as reporter from "cucumber-html-reporter";
import * as path from "path";

export class Reporter {
    public static createHTMLReport(suiteName,jsonReports, htmlReports ) {
        const cucumberReporterOptions = {
            jsonFile: path.join(jsonReports,suiteName,"cucumber_report.json"),
            output: path.join(htmlReports,suiteName, "cucumber_reporter.html"),
            reportSuiteAsScenarios: true,
            theme: "bootstrap"
        };
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
