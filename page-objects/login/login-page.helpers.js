const UpperToolbar = require('../common/upper-toolbar/upper-toolbar.po');
const LoginPage = require('../login/login-page.po');
const HomePage = require('../home/home-page.po');
const SettingsPage = require('../settings/settings-page.po');

const login = async (email, password) => {
    // Input email at login form
    await LoginPage.inputEmail(email);
    // Input password at login form
    await LoginPage.inputPassword(password);
    // Click "Sign In" button at login form
    await LoginPage.clickSignIn();

    await HomePage.verifyIsDisplayed();
};

const logout = async () => {
    // Open settings
    await UpperToolbar.clickSettings();
    // Logout
    await SettingsPage.clickLogout();

    await UpperToolbar.verifySettingsLinkIsNotDisplayed();
};

module.exports = {
    login,
    logout,
};
