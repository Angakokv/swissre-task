const expectationHelpers = require('../../../helpers/expectation-helpers');

class UpperToolbar {
    constructor() {
        this.linkByTextSelector = 'a.nav-link*=';
    }

    get newPostLink()  { return $(`${this.linkByTextSelector}New Post`); }
    get settingsLink() { return $(`${this.linkByTextSelector}Settings`); }

    async clickNewPost() {
        await this.newPostLink.click();
    };

    async clickSettings() {
        await this.settingsLink.click();
    };

    async verifySettingsLinkIsNotDisplayed() {
        await expectationHelpers.verifyIsNotDisplayed(this.settingsLink);
    };
}

module.exports = new UpperToolbar();
