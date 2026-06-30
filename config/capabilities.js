 // LambdaTest capabilities
const { test: base } = require('@playwright/test');
const { platform } = require('node:os');

module.exports = [
  {
  browserName: 'chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'My assignment build',
    name: 'Playwright TestMu Chrome latest and Windows 11',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    screeshot:true,
  }
   
},
{
	browserName: "chrome",

	browserVersion: "125.0",
	"LT:Options": {
    build: 'My assignment build',
    name: 'Playwright TestMu Chrome 125.0 and Windows 10',
		user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    screeshot:true,
		platform: "Windows 10",
		
	}
},
{
  browserName: 'pw-webkit',
  browserVersion: 'latest',
  'LT:Options': {
    platform: "macOS Sonoma",
    build: 'My assignment build',
    name: 'Playwright TestMu WebKit latest and macOS Sonoma',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    screenshot:true,
  }
   
}

];




