Feature: User Login for Shopizer

    Scenario: User Login for Shopizer
        Given User visit Shopizer
        When User enters <email>
        And User enters pass <password>
        And User clicks on Login
        Then User homepage is displayed

Examples:
    | email | password |
    | "sheikhkhizarnadeem@gmail.com"  |  "1234567$" |