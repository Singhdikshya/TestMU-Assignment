const {chromium}=require('@playwright/test');


const connectToBrowser = async (capability) => {
  const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`;
  const browser = await chromium.connect(wsEndpoint);
  return browser;
}

module.exports={ connectToBrowser };