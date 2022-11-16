Feature: delivery address for Shopizer

    Scenario: delivery address  for Shopizer
        Given User visit Shopizer
        When User enters <email>
        And User enters pass <password>
        And User clicks on Login
        And user clicks on delivery address
        And user inputs all info
        And user clicks on continue 
        Then delivery address will be update 
      
   Examples: 
    | email | password |
    | "sheikhkhizarnadeem@gmail.com"  |  "1234567$" |