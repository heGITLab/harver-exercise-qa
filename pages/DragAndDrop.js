const { I } = inject();

module.exports = {

    // locators in basic auth page
    locators: {
        label_dragAndDrop: "//h3[contains(text(), 'Drag and Drop')]"
    },

    // functions which perform operations in basic auth page
    getLink(value) {
        return `//div/header[contains(text(), '${value}')]`;
    },

    dragAndDropA() {
        I.waitForElement(this.getLink('A'), 10);
        I.dragAndDrop(this.getLink('A'), this.getLink('B'));
    },

    dragAndDropB() {
        I.waitForElement(this.getLink('B'), 10);
        I.dragAndDrop(this.getLink('B'), this.getLink('A'));
    },

    async getDragAndDropText() {
        I.waitForElement(this.locators.label_dragAndDrop, 10);
        return await I.grabTextFrom(this.locators.label_dragAndDrop);
    }
}