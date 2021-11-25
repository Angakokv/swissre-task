const expectationHelpers = require('../../helpers/expectation-helpers');

class ArticlePage {
    constructor() {
        this.titleSelector             = 'div.banner';
        this.contentSelector           = 'div.article-content';
        this.editArticleButtonSelector = '*=Edit Article';
    }

    get articleTitle()      { return $(this.titleSelector);   }
    get articleContent()    { return $(this.contentSelector); }
    get editArticleButton() { return $(this.editArticleButtonSelector); }

    async verifyEditArticleButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.editArticleButton);
    };

    async verifyIsDisplayed() {
        await this.verifyEditArticleButtonIsDisplayed();
    };

    async verifyTitle(expectedTitle) {
        await expectationHelpers.verifyHaveTextContaining(this.articleTitle, expectedTitle);
    };

    async verifyContent(expectedContent) {
        await expectationHelpers.verifyHaveTextContaining(this.articleContent, expectedContent);
    };
}

module.exports = new ArticlePage();
