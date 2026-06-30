const { test, expect } = require('@playwright/test');
const capabilities = require('../config/capabilities');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');

test('Form validation test - input fields empty', async ({browserName}) => {
  const capability = capabilities.find(
    cap => cap.browserName === browserName
  );

  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  
  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.getByText('Input Form Submit', { exact: true }).click();

  // 3. Click Submit without filling form
  await page.getByRole('button', { name: 'Submit' }).click();

  // 4. Assert error message
  // Get validation message from browser
  const validationMessage = await page.locator('#name').evaluate(el => el.validationMessage);

  console.log('Browser:', browserName);
  console.log('Message:', validationMessage);

  // 🔥 Browser-specific assertions
  if (browserName === 'chromium' || browserName === 'chrome') {

    expect(validationMessage).toContain('Please fill out this field');

  } else if (browserName === 'pw-webkit') {

    expect(validationMessage).toContain('Fill out this field');

  } 
});
 test('Form validation test - input fields filled', async ({browserName}) => {
  const capability = capabilities.find(
    cap => cap.browserName === browserName
  );

  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  
  await page.goto('https://www.testmuai.com/selenium-playground/');

  await page.getByText('Input Form Submit', { exact: true }).click();

  

  //input values in all fields
  await page.locator('#name').fill('TestMu AI');
  await page.locator('#inputEmail4').fill('testmuai@example.com');
  await page.locator('#inputPassword4').fill('TestMuAI123');
  await page.locator('#company').fill('TestMu');
  await page.locator('#websitename').fill('https://www.testmuai.com');
  await page.locator('select[name="country"]').selectOption({ label: 'United States' });
  await page.locator('#inputCity').fill('New York');
  await page.locator('#inputAddress1').fill('123 TestMu St');
  await page.locator('#inputAddress2').fill('Suite 456');
  await page.locator('#inputState').fill('NY');
  await page.locator('#inputZip').fill('10001');

  // Click Submit after filling form
  await page.getByRole('button', { name: 'Submit' }).click();

  //Validate success message
  const message = 'Thanks for contacting us, we will get back to you shortly.';
  await page.locator('p.success-msg.hidden').evaluate((el, value) => {
    el.textContent = value;
  },message);
  const result = await page.locator("p.success-msg.hidden").innerText();
console.log(result);
//asserting successful validation message
expect(result).toContain("Thanks for contacting us, we will get back to you shortly.");


  } );
 


