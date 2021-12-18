const { I } = inject();

module.exports = {

    // locators in dropdown list page
    locators: {
        dropdown: "#dropdown",
        label_dropdownList: "//h3[contains(text(), 'Dropdown List')]",
    },

    // functions which perform operations in dropdown list page
    clickOption1() {
        I.waitForElement(this.locators.dropdown, 10);
        I.selectOption(this.locators.dropdown, 'Option 1');
    },

    clickOption2() {
        I.waitForElement(this.locators.dropdown, 10);
        I.selectOption(this.locators.dropdown, 'Option 2');
    },

    async getDropdownListText() {
        I.waitForElement(this.locators.label_dropdownList, 10);
        return await I.grabTextFrom(this.locators.label_dropdownList);
    }
}