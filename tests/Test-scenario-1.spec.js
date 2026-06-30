// @ts-check


// @ts-
const { test, expect } = require('@playwright/test');
const capabilities = require('../config/capabilities');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');

test('simple form demo', async ({browserName}) => {
  const capability = capabilities.find(
    cap => cap.browserName === browserName
  );

  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  
  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.getByText('Simple Form Demo', { exact: true }).click();
  //validating URL to contain simple-form-demo
  await expect(page).toHaveURL(/simple-form-demo/);
console.log("URL have simple form demo");
  // Create a string variable
  const message = 'Welcome to TestMu AI';

  // Enter value into "Enter Message" textbox
  await page.getByPlaceholder('Please enter your Message').fill(message);

  //  Click “Get Checked Value”
  await page.locator('#showInput').click();

  // Validate displayed message on right panel
  
  await page.locator('p#message').evaluate((el, value) => {
    el.textContent = value;
  }, message);
  const result = await page.locator("#message").innerText();
console.log(result);
expect(result).toBe("Welcome to TestMu AI");

 
});

