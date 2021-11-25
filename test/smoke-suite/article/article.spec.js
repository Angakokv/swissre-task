const appConfig         = require('../../../config/app.conf');
const commonPageHelpers = require('../../../page-objects/common/common-page.helpers');
const loginPageHelpers  = require('../../../page-objects/login/login-page.helpers');

const UpperToolbar      = require('../../../page-objects/common/upper-toolbar/upper-toolbar.po');
const CreateArticlePage = require('../../../page-objects/article/create/create-article-page.po');
const ArticlePage       = require('../../../page-objects/article/article-page.po');

describe('User creates an article successfully', function() {
    const email = appConfig.users.testUser.email;
    const password = appConfig.users.testUser.password;
    const articleTitle = `Some article ${Math.floor(Math.random() * 6666)}`
    const articleContent = `Some article content ${Math.floor(Math.random() * 666666)}`

    before(async function() {
        // Navigate to the login page
        await commonPageHelpers.navigateToLoginPage();
        // Login to the website
        await loginPageHelpers.login(email, password);
        // Click on "New Post" link
        await UpperToolbar.clickNewPost();
    });

    it('Verify that create article page is displayed', async function() {
        await CreateArticlePage.verifyIsDisplayed();
    });

    describe('User has entered article content and clicked publish', function() {
        before(async function() {
            // Input article title
            await CreateArticlePage.inputTitle(articleTitle);
            // Input article about info
            await CreateArticlePage.inputAbout("Article about smth");
            // Input article content
            await CreateArticlePage.inputContent(articleContent);
            // Publish article
            await CreateArticlePage.clickPublish();
        });

        it('Verify that article page is displayed', async function() {
            await ArticlePage.verifyIsDisplayed();
        });

        it('Verify that article title is correct', async function() {
            await ArticlePage.verifyTitle(articleTitle);
        });

        it('Verify that article content is correct', async function() {
            await ArticlePage.verifyContent(articleContent);
        });
    });

    after(async function() {
        // Logout from the website
        await loginPageHelpers.logout();
    });
});
