# HARVER EXERCISE QA

## Overview

The project is based on https://the-internet.herokuapp.com. Automated five tests which is :


## Automation Environment (Technology/Frameworks/IDE)

- NPM
- CodeceptJS
- Puppeteer
- Cucumber
- Allure Report
- Visual Studio Code

## Initial Installation and Setup

- npm install

*Important
- Save valid credential in "login_data\credential.json" file

## Execute Tests

1. Test Suite - OFI Survey A
   1. npm run survey_a

<br>

2. Test Suite - OFI Survey B
   1. npm run survey_b

<br>

3. Test Suite - Survey Hunt
   1. npm run survey_hunt

**OR**

4. To run tests individually
   1. npx codeceptjs run --features --grep {test-scenario-tag}