const { I, welcomeToTheInternetPage, addRemoveElementsPage, dropdownList, contextMenu} = inject();

const assert = require('assert').strict;

// listing down all the steps in feature file
// feature : addRemoveElements
Given('User click on add_remove elements link and navigate', () => {
  welcomeToTheInternetPage.clickAddRemoveElements();
});

When('User validate the add_remove elements text', async () => {
  assert.deepEqual(await addRemoveElementsPage.getAddRemoveElementsText(), 'Add/Remove Elements', 'Expected text not present');
});

When('User add the element then system display delete button', () => {
  addRemoveElementsPage.clickAddElement();
});

Then('User delete the element and system remove the delete button', () => {
  addRemoveElementsPage.clickDelete();
});


// feature : dropdownList
Given('User click on dropdown link and navigate', () => {
  welcomeToTheInternetPage.clickDropdown();
});

When('User validate the dropdown list text', async () => {
  assert.deepEqual(await dropdownList.getDropdownListText(), 'Dropdown List', 'Expected text not present');
});

When('User select option 1 from dropdown', () => {
  dropdownList.clickOption1();
});

Then('User select option 2 from dropdown', () => {
  dropdownList.clickOption2();
});


// feature : contextMenu
Given('User click on context menu link and navigate', () => {
  welcomeToTheInternetPage.clickContextMenu();
});

When('User validate the context menu text', async () => {
  assert.deepEqual(await contextMenu.getContextMenuText(), 'Context Menu', 'Expected text not present');
});

When('User right click on the box and accept the popup', () => {
  contextMenu.rightClickOnBox();
});

// Then('User click back option in context menu and validate heading', async () => {
//   contextMenu.clickOnContextMenu();
//   assert.deepEqual(await welcomeToTheInternetPage.getHeadingText(), 'Welcome to the-internet', 'Expected text not present');
// });