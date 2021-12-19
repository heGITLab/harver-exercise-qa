const { I } = inject();

module.exports = {

  // locators in basic auth page
  locators: {
    label_redirection: "//h3[contains(text(), 'Redirection')]",
    link_here: "#redirect",
  },

  // functions which perform operations in basic auth page
  clickHere() {
    I.waitForElement(this.locators.link_here, 10);
    I.clickLink('here', this.locators.link_here);
  },

  async getRedirectionText() {
    I.waitForElement(this.locators.label_redirection, 10);
    return await I.grabTextFrom(this.locators.label_redirection);
  }
}