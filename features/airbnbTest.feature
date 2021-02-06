Feature: AirbnbTest.feature

    @smoke
    Scenario:Book a hotel in Air bnb with lowest price
        Given User launch the air bnb application and accept cookies for the session
        When User search for a stay in location "location" with valid dates for 1 adult 
        Then User Verify the stay list appear in the application
        And User Selects the hotel present in the application