const expectationHelpers = require('../../../helpers/expectation-helpers');

class CreateArticlePage {
    constructor() {
        this.titleFieldSelector   = 'input[placeholder="Article Title"]';
        this.aboutFieldSelector   = 'input[placeholder="What\'s this article about?"]';
        this.contentFieldSelector = 'textarea[placeholder="Write your article (in markdown)"]';
        this.publishButtonSelector = 'button*=Publish';
    }

    get titleField()    { return $(this.titleFieldSelector);    }
    get aboutField()    { return $(this.aboutFieldSelector);    }
    get contentField()  { return $(this.contentFieldSelector);  }
    get publishButton() { return $(this.publishButtonSelector); }

    async inputTitle(title) {
        await this.titleField.setValue(title);
    };

    async inputAbout(about) {
        await this.aboutField.setValue(about);
    };

    async inputContent(content) {
        await this.contentField.setValue(content);
    };

    async clickPublish() {
        await this.publishButton.click();
    };

    async verifyPublishButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.publishButton);
    };

    async verifyIsDisplayed() {
        await this.verifyPublishButtonIsDisplayed();
    };
}

module.exports = new CreateArticlePage();
