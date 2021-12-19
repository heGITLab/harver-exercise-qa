/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type welcomeToTheInternetPage = typeof import('./pages/WelcomeToTheInternet.js');
type addRemoveElementsPage = typeof import('./pages/AddRemoveElements.js');
type dropdownListPage = typeof import('./pages/DropdownList.js');
type redirectLinkPage = typeof import('./pages/RedirectLinkPage.js');
type statusCodesPage = typeof import('./pages/StatusCodesPage.js');
type statusCode200Page = typeof import('./pages/StatusCode200Page.js');
type statusCode301Page = typeof import('./pages/StatusCode301Page.js');
type statusCode404Page = typeof import('./pages/StatusCode404Page.js');
type statusCode500Page = typeof import('./pages/StatusCode500Page.js');
type dragAndDropPage = typeof import('./pages/DragAndDropPage.js');
type contextMenuPage = typeof import('./pages/ContextMenuPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer { }
  interface I extends ReturnType<steps_file> { }
  namespace Translation {
    interface Actions { }
  }
}
