
const teardown = async(page, browser) => {
  // Close the page and browser after the test is done
  await page.close();
  await browser.close();
}
module.exports = { teardown };