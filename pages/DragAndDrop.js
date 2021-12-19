const { I } = inject();

module.exports = {

    // locators in basic auth page
    locators: {
        label_dragAndDropA: "//div/header[contains(text(), 'A')]",
        label_dragAndDropB: "//div/header[contains(text(), 'B')]",
        label_dragAndDrop: "//h3[contains(text(), 'Drag and Drop')]",

    },

    // functions which perform operations in basic auth page
    dragAndDropA() {
        I.waitForElement(this.locators.label_dragAndDropA, 10);
        I.dragAndDrop(this.locators.label_dragAndDropA, this.locators.label_dragAndDropB);
    },

    dragAndDropB() {
        I.waitForElement(this.locators.label_dragAndDropB, 10);
        I.dragAndDrop(this.locators.label_dragAndDropB, this.locators.label_dragAndDropA);
    },

    async getDragAndDropText() {
        I.waitForElement(this.locators.label_dragAndDrop, 10);
        return await I.grabTextFrom(this.locators.label_dragAndDrop);
    }
}