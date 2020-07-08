# e2e-tests
Cucumber-Typescript-Protractor (UI and API Automation)
Page object model is used in order to maintain the code. This setup can also be used to run the tests in Docker with the help of headless chrome browser.

The Power of Typescript gives a better way to write the e2e tests with cucmber and protractor.
Repository will help those who want to start doing UI or API Automation in quick time. The setup will take only 30 Minutes to and you can start with writing your scenarios in BDD.
Node version required for the setup is above or equal node 8.

prerequisite:-
Node version 8 or above should be installed

How to setup:-
1.Clone the repo
2.Do npm install
3.run the command npm webdriver-update (note change the version of chrome driver in package.json as per your requirement)
4.run the command npm run build-clean
5.run the command npm run e2e
6.You are done, now the execution of test cases will start.

To Configure the test for API Automation below are the steps.:-
1.Add the token Uri in Config.ts
2.Add the endpoint in config.ts you want to Hit (GET, POST, PUT, DELETE)
3.Sample example is provided in the repo

Note:-This setup is useful when you are working on microservices. For backend services only API tests should be triggered and For UI apps only UI tests should be triggered.


