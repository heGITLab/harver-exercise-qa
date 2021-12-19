const { I } = inject();

module.exports = {

  // locators in welcome to the internet page
  locators: {
    link_addRemoveElements: "//a[contains(text(), 'Add/Remove Elements')]",
    link_redirectLink: "//a[contains(text(), 'Redirect Link')]",
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

  clickRedirectLink() {
    this.loadUrl();
    I.waitForElement(this.locators.link_redirectLink, 10);
    I.click(this.locators.link_redirectLink);
  },

  clickContextMenu() {
    this.loadUrl();
    I.waitForElement(this.locators.link_contextMenu, 10);
    I.click(this.locators.link_contextMenu);
  },

  clickDragAndDrop() {
    this.loadUrl();
    I.waitForElement(this.locators.link_dragAndDrop, 10);
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