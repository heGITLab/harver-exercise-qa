const { I } = inject();

module.exports = {

    // locators in basic auth page
    locators: {
        label_statusCodes: "//h3[contains(text(), 'Status Codes')]",
        link_200: "//a[contains(text(), '200')]",
        link_301: "//a[contains(text(), '301')]",
        link_404: "//a[contains(text(), '404')]",
        link_500: "//a[contains(text(), '500')]",
    },

    // functions which perform operations in basic auth page
    clickStatusCode200() {
        I.waitForElement(this.locators.link_200, 10);
        I.clickLink('200', this.locators.link_200);
    },

    clickStatusCode301() {
        I.waitForElement(this.locators.link_301, 10);
        I.clickLink('301', this.locators.link_301);
    },

    clickStatusCode404() {
        I.waitForElement(this.locators.link_404, 10);
        I.clickLink('404', this.locators.link_404);
    },

    clickStatusCode500() {
        I.waitForElement(this.locators.link_500, 10);
        I.clickLink('500', this.locators.link_500);
    },

    async getStatusCodesText() {
        I.waitForElement(this.locators.label_statusCodes, 10);
        return await I.grabTextFrom(this.locators.label_statusCodes);
    }
}