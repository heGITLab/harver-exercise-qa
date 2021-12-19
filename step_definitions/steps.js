const { I, welcomeToTheInternetPage, addRemoveElementsPage, dropdownListPage, contextMenuPage, redirectLinkPage, statusCodesPage, statusCode200Page, statusCode301Page, statusCode404Page, statusCode500Page, dragAndDropPage } = inject();

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
  assert.deepEqual(await dropdownListPage.getDropdownListText(), 'Dropdown List', 'Expected text not present');
});

When('User select option 1 from dropdown', () => {
  dropdownListPage.clickOption1();
});

Then('User select option 2 from dropdown', () => {
  dropdownListPage.clickOption2();
});


// feature : contextMenu
Given('User click on context menu link and navigate', () => {
  welcomeToTheInternetPage.clickContextMenu();
});

When('User validate the context menu text', async () => {
  assert.deepEqual(await contextMenuPage.getContextMenuText(), 'Context Menu', 'Expected text not present');
});

When('User right click on the box and accept the popup', () => {
  contextMenuPage.rightClickOnBox();
});


// feature : redirectLink
Given('User click on redirect link and navigate', () => {
  welcomeToTheInternetPage.clickRedirectLink();
});

When('User validate the redirection text and click on here', async () => {
  assert.deepEqual(await redirectLinkPage.getRedirectionText(), 'Redirection', 'Expected text not present');
  redirectLinkPage.clickHere();
});

When('User validate the status codes text and click on 200', async () => {
  assert.deepEqual(await statusCodesPage.getStatusCodesText(), 'Status Codes', 'Expected text not present');
  statusCodesPage.clickStatusCode200();
});

When('User validate the status code 200 description and click on here', async () => {
  I.assertContain(await statusCode200Page.getStatusCode200Description(), '200', 'Expected text not present');
  statusCode200Page.clickHere();
});

When('User validate the status codes text and click on 301', async () => {
  assert.deepEqual(await statusCodesPage.getStatusCodesText(), 'Status Codes', 'Expected text not present');
  statusCodesPage.clickStatusCode301();
});

When('User validate the status code 301 description and click on here', async () => {
  I.assertContain(await statusCode301Page.getStatusCode301Description(), '301', 'Expected text not present');
  statusCode301Page.clickHere();
});

When('User validate the status codes text and click on 404', async () => {
  assert.deepEqual(await statusCodesPage.getStatusCodesText(), 'Status Codes', 'Expected text not present');
  statusCodesPage.clickStatusCode404();
});

When('User validate the status code 404 description and click on here', async () => {
  I.assertContain(await statusCode404Page.getStatusCode404Description(), '404', 'Expected text not present');
  statusCode404Page.clickHere();
});

When('User validate the status codes text and click on 500', async () => {
  assert.deepEqual(await statusCodesPage.getStatusCodesText(), 'Status Codes', 'Expected text not present');
  statusCodesPage.clickStatusCode500();
});

Then('User validate the status code 500 description and click on here', async () => {
  I.assertContain(await statusCode500Page.getStatusCode500Description(), '500', 'Expected text not present');
  statusCode500Page.clickHere();
});


// feature : dragAndDrop
Given('User click on drag and drop then navigate', () => {
  welcomeToTheInternetPage.clickDragAndDrop();
});

When('User validate the drag and drop text', async () => {
  assert.deepEqual(await dragAndDropPage.getDragAndDropText(), 'Drag and Drop', 'Expected text not present');
});

When('User drag and drop A on B', async () => {
  dragAndDropPage.dragAndDropA();
});

Then('User drag and drop B on A', () => {
  dragAndDropPage.dragAndDropB();
});