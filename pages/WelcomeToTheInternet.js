const { I } = inject();

module.exports = {

  // locators in welcome to the internet page
  locators: {
    link_addRemoveElements: "//a[contains(text(), 'Add/Remove Elements')]",
    link_basicAuth: "//a[contains(text(), 'Basic Auth')]",
    link_contextMenu: "//a[contains(text(), 'Context Menu')]",
    link_dragAndDrop: "//a[contains(text(), 'Drag and Drop')]",
    link_dropdown: "//a[contains(text(), 'Dropdown')]"
  },

  // functions which perform operations in welcome to the internet page
  clickAddRemoveElements() {
    I.click(this.locators.link_addRemoveElements)
  },

  clickBasicAuth() {
    I.click(this.locators.link_basicAuth)
  },

  clickContextMenu() {
    I.click(this.locators.link_contextMenu)
  },

  clickDragAndDrop() {
    I.click(this.locators.link_dragAndDrop)
  },

  clickDropdown() {
    I.click(this.locators.link_dropdown)
  },
}