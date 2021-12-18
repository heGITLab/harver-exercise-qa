const { I } = inject();

module.exports = {

  // locators in basic auth page
  locators: {
    bb: "",
    aa: "",
  },

  // functions which perform operations in basic auth page
  clickAddElement() {
    I.click(this.locators.btn_addElement)
  },

  clickDelete() {
    I.click(this.locators.btn_delete)
  },
}