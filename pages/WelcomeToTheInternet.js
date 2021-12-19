const { I } = inject();

module.exports = {

  // locators in welcome to the internet page
  locators: {
    label_heading: ".heading"
  },

  // functions which perform operations in welcome to the internet page
  getLink(value) {
    return `//a[contains(text(), '${value}')]`;
  },

  loadUrl() {
    I.amOnPage('/');
  },

  clickAddRemoveElements() {
    this.loadUrl();
    I.waitForElement(this.getLink('Add/Remove Elements'), 10);
    I.click(this.getLink('Add/Remove Elements'));
  },

  clickRedirectLink() {
    this.loadUrl();
    I.waitForElement(this.getLink('Redirect Link'), 10);
    I.click(this.getLink("Redirect Link"));
  },

  clickContextMenu() {
    this.loadUrl();
    I.waitForElement(this.getLink('Context Menu'), 10);
    I.click(this.getLink("Context Menu"));
  },

  clickDragAndDrop() {
    this.loadUrl();
    I.waitForElement(this.getLink('Drag and Drop'), 10);
    I.click(this.getLink('Drag and Drop'));
  },

  clickDropdown() {
    this.loadUrl();
    I.waitForElement(this.getLink('Dropdown'), 10);
    I.click(this.getLink('Dropdown'));
  },

  async getHeadingText() {
    I.waitForElement(this.locators.label_heading, 10);
    return await I.grabTextFrom(this.locators.label_heading);
  }

}