const { I, welcomeToTheInternetPage } = inject();

module.exports = {

    // locators in context menu page
    locators: {
        div_hotSpot: "#hot-spot",
        label_contextMenu: "//h3[contains(text(), 'Context Menu')]",
    },

    // functions which perform operations in context menu page
    rightClickOnBox() {
        I.waitForElement(this.locators.div_hotSpot, 10);
        I.amAcceptingPopups();
        I.rightClick(this.locators.div_hotSpot);
        I.acceptPopup();
    },
    
    async getContextMenuText() {
        I.waitForElement(this.locators.label_contextMenu, 10);
        return await I.grabTextFrom(this.locators.label_contextMenu);
    }
}