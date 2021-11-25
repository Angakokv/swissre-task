const appConfig         = require('../../../config/app.conf');
const commonPageHelpers = require('../../../page-objects/common/common-page.helpers');
const loginPageHelpers  = require('../../../page-objects/login/login-page.helpers');

const LoginPage         = require('../../../page-objects/login/login-page.po');
const HomePage          = require('../../../page-objects/home/home-page.po');

describe('User signs in successfully', function() {
    const email = appConfig.users.testUser.email;
    const password = appConfig.users.testUser.password;

    before(async function() {
        await commonPageHelpers.navigateToLoginPage();
    });

    it('Verify that login page is displayed', async function() {
        await LoginPage.verifyIsDisplayed();
    });

    describe('User has entered auth credentials', function() {
        before(async function() {
            // Input email at login form
            await LoginPage.inputEmail(email);
            // Input password at login form
            await LoginPage.inputPassword(password);
            // Click "Sign In" button at login form
            await LoginPage.clickSignIn();
        });

        it('Verify that home page is displayed', async function() {
            await HomePage.verifyIsDisplayed();
        });
    });

    after(async function() {
        // Logout from the website
        await loginPageHelpers.logout();
    });
});
