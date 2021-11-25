const expectationHelpers = require('../../helpers/expectation-helpers');

class SettingsPage {
    constructor() {
        this.logoutButtonSelector = 'button*=logout';
    }

    get logoutButton() { return $(this.logoutButtonSelector); }

    async clickLogout() {
        await this.logoutButton.click();
    };

    async verifyLogoutButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.logoutButton);
    };

    async verifyIsDisplayed() {
        await this.verifyLogoutButtonIsDisplayed();
    };
}

module.exports = new SettingsPage();
