@addRemoveElement
Feature: Adding and Removing Elements
  User should be able to click on add/remove elements link
  User should be able to add and remove elements

  Scenario: Perform add and remove
    Given User click on add_remove elements link and navigate
    When User validate the add_remove elements text
    When User add the element then system display delete button
    Then User delete the element and system remove the delete button