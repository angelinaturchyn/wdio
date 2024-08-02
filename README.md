WebdriverIO with Cucumber (Gherkin) Project
This project demonstrates the setup and use of WebdriverIO with Cucumber (Gherkin) for writing automated browser tests in JavaScript.

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed (version 14 or later)
npm or yarn installed
Setup
Clone the repository:

git clone https://github.com/angelinaturchyn/webdriverIO-tests
cd webdriverio-cucumber-example

Install dependencies:

Using npm:

npm install
Using yarn:

yarn install
Configuration:

The wdio.conf.js file contains the configuration for WebdriverIO. It is pre-configured to use Cucumber with Gherkin syntax.

Writing Tests
Tests are written in Gherkin syntax and placed in the ./features directory.

Sample Feature File
Create a file example.feature in the ./features directory:

gherkin

Feature: Example feature
  As a user
  I want to perform a basic test
  So that I can see WebdriverIO and Cucumber working together

  Scenario: Open Google and search for WebdriverIO
    Given I open the Google homepage
    When I search for "WebdriverIO"
    Then I should see results containing "WebdriverIO"
Step Definitions
Create a file example.steps.js in the ./features/step_definitions directory:

javascript

const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I open the Google homepage', async () => {
    await browser.url('https://www.google.com');
});

When('I search for {string}', async (searchTerm) => {
    const searchInput = await $('input[name="q"]');
    await searchInput.setValue(searchTerm);
    await browser.keys('Enter');
});

Then('I should see results containing {string}', async (expectedTerm) => {
    const results = await $('#search');
    const text = await results.getText();
    assert(text.includes(expectedTerm));
});
Running Tests
To execute the tests, use the following command:

npx wdio run wdio.conf.js
Project Structure
go

├── features
│   ├── example.feature
│   └── step_definitions
│       └── example.steps.js
├── wdio.conf.js
├── package.json
└── README.md
Contributing
Contributions are welcome! Please submit a pull request or open an issue for any changes or suggestions.

License
This project is licensed under the MIT License.

Feel free to customize the project and the README file to suit your specific needs. If you have any questions or need further assistance, let me know!
