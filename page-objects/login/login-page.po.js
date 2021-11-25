const expectationHelpers = require('../../helpers/expectation-helpers');

class LoginPage {
    constructor() {
        this.emailFieldSelector    = 'input[type=email]';
        this.passwordFieldSelector = 'input[type=password]';
        this.signInButtonSelector  = 'button[type=submit]';
    }

    get emailField()    { return $(this.emailFieldSelector);    }
    get passwordField() { return $(this.passwordFieldSelector); }
    get signInButton()  { return $(this.signInButtonSelector);  }

    async inputEmail(email) {
        await this.emailField.setValue(email);
    };

    async inputPassword(password) {
        await this.passwordField.setValue(password);
    };

    async clickSignIn() {
        await this.signInButton.click();
    };

    async verifyEmailFieldIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.emailField);
    };

    async verifyPasswordFieldIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.passwordField);
    };

    async verifySignInButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.signInButton);
    };

    async verifyIsDisplayed() {
        await this.verifyEmailFieldIsDisplayed();
        await this.verifyPasswordFieldIsDisplayed();
        await this.verifySignInButtonIsDisplayed();
    };
}

module.exports = new LoginPage();
