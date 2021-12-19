const { I } = inject();

module.exports = {

    // locators in add/remove elements page
    locators: {
        label_addRemoveElements: "//h3[contains(text(), 'Add/Remove Elements')]"
    },

    // functions which perform operations in add/remove elements page
    getLink(value) {
        return `//button[contains(text(), '${value}')]`;
    },

    clickAddElement() {
        I.waitForElement(this.getLink('Add Element'), 10);
        I.click(this.getLink('Add Element'));
    },

    clickDelete() {
        I.waitForElement(this.getLink('Delete'), 10);
        I.click(this.getLink('Delete'));
    },

    async getAddRemoveElementsText() {
        I.waitForElement(this.locators.label_addRemoveElements, 10);
        return await I.grabTextFrom(this.locators.label_addRemoveElements);
    }
}