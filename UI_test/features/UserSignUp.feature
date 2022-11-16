Feature: User SignUp Shopizer

    Scenario: User SignUp Shopizer
        Given User visit Shopizer
        And user navigates to register page
        When user enters info <email>, <password>, <firstname>, <lastname>
        And user cliks on register
        Then account is registered

Examples:
    | email | password | firstname | lastname |
    | "sheikhkhizarnadeem@gmail.com"  | "1234567$"  | "Khizar"  | "Nadeem" |