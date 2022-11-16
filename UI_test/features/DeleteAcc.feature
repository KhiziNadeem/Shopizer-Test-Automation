Feature: Delete Account on Shopizer

    Scenario: Delete account on Shopizer
        Given User visit Shopizer
        When User enters <email>
        And User enters pass <password>
        And User clicks on Login
        And User clicks on Account Management
        And User clicks on Delete Your Account
        And User confirms Deletetion
        Then Account is Deleted
    

Examples:
    | email | password |
    | "sheikhkhizarnadeem@gmail.com"  |  "1234567$" |