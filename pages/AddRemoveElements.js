const { I } = inject();

module.exports = {

    // locators in add/remove elements page
    locators: {
        btn_addElement: "//button[contains(text(), 'Add Element')]",
        btn_delete: "//button[contains(text(), 'Delete')]",
        label_addRemoveElements: "//h3[contains(text(), 'Add/Remove Elements')]"
    },

    // functions which perform operations in add/remove elements page
    clickAddElement() {
        I.waitForElement(this.locators.btn_addElement, 10);
        I.click(this.locators.btn_addElement);
    },

    clickDelete() {
        I.waitForElement(this.locators.btn_delete, 10);
        I.click(this.locators.btn_delete);
    },

    async getAddRemoveElementsText() {
        I.waitForElement(this.locators.label_addRemoveElements, 10);
        return await I.grabTextFrom(this.locators.label_addRemoveElements);
    }
}