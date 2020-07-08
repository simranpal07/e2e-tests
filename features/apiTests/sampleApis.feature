Feature: userController.feature

    @smoke
    Scenario:Test Get users endpoint /api/v1/getendpoint
        Given generate oauth token
        And I hit get endpoint

    @smoke
    Scenario:Test Post method with valid body /api/v1/postendpoint
        Given check oauth token is available
        Then I hit the post endpoint verify the response

    @smoke
    Scenario:Test PUT end point /api/v1/putEndPoint
        Given check oauth token is available
        Then I hit the put endpoint verify the response
