const appConfig         = require('../../../config/app.conf');
const commonPageHelpers = require('../../../page-objects/common/common-page.helpers');
const loginPageHelpers  = require('../../../page-objects/login/login-page.helpers');

const UpperToolbar      = require('../../../page-objects/common/upper-toolbar/upper-toolbar.po');
const SettingsPage      = require('../../../page-objects/settings/settings-page.po');

describe('User logout successfully', function() {
    const email = appConfig.users.testUser.email;
    const password = appConfig.users.testUser.password;

    before(async function() {
        // Navigate to the login page
        await commonPageHelpers.navigateToLoginPage();
        // Login to the website
        await loginPageHelpers.login(email, password);
    });

    describe('User has logged out', function() {
        before(async function() {
            // Open settings
            await UpperToolbar.clickSettings();
            // Logout
            await SettingsPage.clickLogout();
        });

        it('Verify that settings link isn"t displayed', async function() {
            await UpperToolbar.verifySettingsLinkIsNotDisplayed();
        });
    });
});
