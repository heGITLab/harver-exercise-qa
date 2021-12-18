/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type welcomeToTheInternetPage = typeof import('./pages/WelcomeToTheInternet.js');
type addRemoveElementsPage = typeof import('./pages/AddRemoveElements.js');
type dropdownList = typeof import('./pages/DropdownList.js');
type contextMenu = typeof import('./pages/ContextMenu.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
