@dropdownList
Feature: Selecting dropdown list
  User should be able to click on dropdown list
  User should be able to select given 2 options

  Scenario: Perform dropdown
    Given User click on dropdown link and navigate
    When User validate the dropdown list text
    When User select option 1 from dropdown
    Then User select option 2 from dropdown