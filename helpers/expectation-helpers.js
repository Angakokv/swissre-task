/**
 * Verify that element is displayed
 *
 * @param  {Object}    targetElement - The element to interact with.
 *
 * @return {Promise}
 */
const verifyIsDisplayed = async (targetElement) => {
    await expect(targetElement).toBeDisplayed();
};

/**
 * Verify that element isn't displayed
 *
 * @param  {Object}    targetElement - The element to interact with.
 *
 * @return {Promise}
 */
const verifyIsNotDisplayed = async (targetElement) => {
    await expect(targetElement).not.toBeDisplayed();
};

/**
 * Verify that element contains a specific text
 *
 * @param  {Object}    targetElement - The element to interact with.
 * @param  {String}    expectedValue - The value to verify
 *
 * @return {Promise}
 */
const verifyHaveTextContaining = async (targetElement, expectedValue) => {
    await expect(targetElement).toHaveTextContaining(expectedValue);
};

module.exports = {
    verifyIsDisplayed,
    verifyIsNotDisplayed,
    verifyHaveTextContaining,
};
