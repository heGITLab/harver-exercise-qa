const { I } = inject();

module.exports = {

  // locators in welcome to the internet page
  locators: {
    link_addRemoveElements: "//a[contains(text(), 'Add/Remove Elements')]",
    link_basicAuth: "//a[contains(text(), 'Basic Auth')]",
    link_contextMenu: "//a[contains(text(), 'Context Menu')]",
    link_dragAndDrop: "//a[contains(text(), 'Drag and Drop')]",
    link_dropdown: "//a[contains(text(), 'Dropdown')]",
    label_heading: ".heading"
  },

  // functions which perform operations in welcome to the internet page
  clickAddRemoveElements() {
    this.loadUrl();
    I.waitForElement(this.locators.link_addRemoveElements, 10);
    I.click(this.locators.link_addRemoveElements);
  },

  clickBasicAuth() {
    I.click(this.locators.link_basicAuth);
  },

  clickContextMenu() {
    this.loadUrl();
    I.waitForElement(this.locators.link_contextMenu, 10);
    I.click(this.locators.link_contextMenu);
  },

  clickDragAndDrop() {
    I.click(this.locators.link_dragAndDrop);
  },

  clickDropdown() {
    this.loadUrl();
    I.waitForElement(this.locators.link_dropdown, 10);
    I.click(this.locators.link_dropdown);
  },

  async getHeadingText() {
    I.waitForElement(this.locators.label_heading, 10);
    return await I.grabTextFrom(this.locators.label_heading);
},

  loadUrl() {
    I.amOnPage('/');
  }
}