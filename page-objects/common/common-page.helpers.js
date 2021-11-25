const navigateToLoginPage = async () => {
    await browser.url('/#login');
};

module.exports = {
    navigateToLoginPage,
};
