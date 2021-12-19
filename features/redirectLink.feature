@redirection
Feature: Redirecting from links
  User should be able to redirect a user from a link
  User should be able to click links between status code 200, 301, 404 and 500

  Scenario: Perform redirection
    Given User click on redirect link and navigate
    When User validate the redirection text and click on here
    When User validate the status codes text and click on 200
    When User validate the status code 200 description and click on here
    When User validate the status codes text and click on 301
    When User validate the status code 301 description and click on here
    When User validate the status codes text and click on 404
    When User validate the status code 404 description and click on here
    When User validate the status codes text and click on 500
    Then User validate the status code 500 description and click on here