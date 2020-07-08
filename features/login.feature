Feature: login.feature

    @smoke
    Scenario:Launch application under test and login with valid credentials
        Given I launch application url under test
        Then I wait for application to be displayed
        When I type username "angular"
        And I type password "password"
        And I type username Description "testUser"
        And I click on submit button
        Then I verify user is successfully logged in