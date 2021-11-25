# Prerequisites
1. Install latest Google Chrome browser.
1. Install stable Node.js.
1. Clone or download this repository.
1. Go to the root folder of cloned repository.
1. Run command `npm install` from command line.

# How to execute on local
1. Set environment variable `USER_EMAIL` with test user email.
1. Set environment variable `USER_PASSWORD` with test user password.
1. Run command `npm run test` from command line to execute all tests using default url "https://react-redux.realworld.io".

You will see tests execution in command line with logs.

# How to generate test report
1. After tests execution run command `npm run e2e-generate-allure-report` from command line.
2. Run command `npm run e2e-open-allure-report` from command line.

Test report will be opened in default browser.

# Restrictions
- Standard Allure report functionality is implemented without custom steps.
