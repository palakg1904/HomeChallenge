# HomeChallenge using Playwright and JavaScript Setup Guide

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `tests` folder
* Name the file as <testname>.spec.js (e.g. search.spec.js)
* Create folder under page-objects/pages as <page-name> (e.g. searchPage)

### How to Run Test
* Run `npx playwright test` to execute the tests
* Run `npx playwright test tests/Search.spec.ts` to execute a single test

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view HTML report
* Go to Project root directory: `./playwright-report/index.html`

### How to view traces of all test
* Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has ran. Traces are a great way for debugging your tests when they fail on CI. You can open traces locally or in your browser on [trace.playwright.dev.](https://trace.playwright.dev/)
* You can open the saved trace using the Playwright CLI or in your browser on [trace.playwright.dev.](https://trace.playwright.dev/). Make sure to add the full path to where your trace.zip file is located. This should include the full path to your trace.zip file.
* Go to Project root directory: `./test-results/`

