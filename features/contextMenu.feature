@contextMenu
Feature: Right click
  User should be able to right click on context menu
  User should be able to select a value from context menu

  Scenario: Perform right click
    Given User click on context menu link and navigate
    When User validate the context menu text
    Then User right click on the box and accept the popup