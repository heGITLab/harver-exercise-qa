exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      // base url
      url: 'https://the-internet.herokuapp.com',
      show: true,
      windowSize: '1200x900',
      chrome: {
        args: [
          '--start-maximized',
          'no-sandbox',
          // '--headless'
        ]
      }
    },
    ChaiWrapper : {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    welcomeToTheInternetPage: './pages/WelcomeToTheInternet.js',
    addRemoveElementsPage: './pages/AddRemoveElements.js',
    dropdownListPage: './pages/DropdownList.js',
    redirectLinkPage: './pages/RedirectLink.js',
    statusCodesPage: './pages/StatusCodes.js',
    statusCode200Page: './pages/StatusCode200.js',
    statusCode301Page: './pages/StatusCode301.js',
    statusCode404Page: './pages/StatusCode404.js',
    statusCode500Page: './pages/StatusCode500.js',
    dragAndDropPage: './pages/DragAndDrop.js',
    contextMenuPage: './pages/ContextMenu.js',
    
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      "enabled": true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'harver-exercise-qa'
}