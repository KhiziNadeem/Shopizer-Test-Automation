Feature: Admin Login for Shopizer

    Scenario: Admin Login for Shopizer
        Given Admin visit Shopizer
        When Admin enter username
        And Admin enters Password
        And Admin Clicks on Login
        Then Admin homepage is diplayed