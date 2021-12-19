const { I } = inject();

module.exports = {

    // locators in basic auth page
    locators: {
        label_statusCodes: "//h3[contains(text(), 'Status Codes')]"
    },

    // functions which perform operations in basic auth page
    getLink(value) {
        return `//a[contains(text(), '${value}')]`;
    },

    clickStatusCode200() {
        I.waitForElement(this.getLink('200'), 10);
        I.clickLink('200', this.getLink('200'));
    },

    clickStatusCode301() {
        I.waitForElement(this.getLink('301'), 10);
        I.clickLink('301', this.getLink('301'));
    },

    clickStatusCode404() {
        I.waitForElement(this.getLink('404'), 10);
        I.clickLink('404', this.getLink('404'));
    },

    clickStatusCode500() {
        I.waitForElement(this.getLink('500'), 10);
        I.clickLink('500', this.getLink('500'));
    },

    async getStatusCodesText() {
        I.waitForElement(this.locators.label_statusCodes, 10);
        return await I.grabTextFrom(this.locators.label_statusCodes);
    }
}