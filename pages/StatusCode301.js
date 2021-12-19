const { I } = inject();

module.exports = {

    // locators in basic auth page
    locators: {
        label_statusCode301: "//h3[contains(text(), 'Status Code')]/following-sibling::p",
        link_here: "//a[contains(text(), 'here')]",
    },

    // functions which perform operations in basic auth page
    clickHere() {
        I.waitForElement(this.locators.link_here, 10);
        I.clickLink('here', this.locators.link_here);
    },

    async getStatusCode301Description() {
        I.waitForElement(this.locators.label_statusCode301, 10);
        return await I.grabTextFrom(this.locators.label_statusCode301);
    }
}