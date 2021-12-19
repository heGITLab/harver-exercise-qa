@dragAndDrop
Feature: Drag And Drop
  User should be able to drag and drop an element
  User should be able to select A and B

  Scenario: Perform drag and drop
    Given User click on drag and drop then navigate
    When User validate the drag and drop text
    When User drag and drop A on B
    Then User drag and drop B on A