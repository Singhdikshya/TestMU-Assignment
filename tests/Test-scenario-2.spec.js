// @ts-check


// @ts-
// @ts-
const { test, expect } = require('@playwright/test');
const capabilities = require('../config/capabilities');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');

test('Drag & Drop Slider test', async ({browserName}) => {
  test.setTimeout(120000); 
  const capability = capabilities.find(
    cap => cap.browserName === browserName
  );

  if (!capability) {
    throw new Error(`No capabilities found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // 2. Click "Drag & Drop Sliders"
  await page.getByText('Drag & Drop Sliders', { exact: true }).click();
  await page.waitForSelector("#slider3 input[type='range']");
   const slider= await page.locator("#slider3 input[type='range']");
   let ele=page.locator("#rangeSuccess");
   let text=await ele.textContent();
   console.log("Default value of slider is : "+text);
   
   let target='95';
   let isCompleted=false;
   if(slider){
    
   
      while(!isCompleted){
        let srcBound=await slider.boundingBox();
        //console.log(srcBound);
         if(srcBound){
        await page.mouse.move(srcBound.x,srcBound.y)
        await page.mouse.down();
        await page.mouse.move(srcBound.width*0.93+srcBound.x,srcBound.y,{steps:5});
        await page.mouse.up();
        let text=await ele.textContent();
        if(text=="95"){
          isCompleted=true;
      }
      }
   }
   
   }

console.log("Final value of slider is : "+await ele.textContent());
   
    
});



