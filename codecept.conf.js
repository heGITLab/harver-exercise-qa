exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
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
    }
  },
  include: {
    I: './steps_file.js',
    welcomeToTheInternetPage: './pages/WelcomeToTheInternet.js',
    addRemoveElementsPage: './pages/AddRemoveElements.js',
    dropdownList: './pages/DropdownList.js',
    contextMenu: './pages/ContextMenu.js'
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