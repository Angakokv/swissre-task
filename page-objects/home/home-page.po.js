const expectationHelpers = require('../../helpers/expectation-helpers');

class HomePage {
    constructor() {
        this.tabByTextSelector = 'a.nav-link=';
    }

    get yourFeedTab() { return $(`${this.tabByTextSelector}Your Feed`); }

    async verifyYourFeedTabIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.yourFeedTab);
    };

    async verifyIsDisplayed() {
        await this.verifyYourFeedTabIsDisplayed();
    };
}

module.exports = new HomePage();
