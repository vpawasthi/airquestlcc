var AllureReporter = require('jasmine-allure-reporter');
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

   // baseUrl : 'https://lcc-qa.air-quest.com/signin',

    directConnect: true,

    capabilities: {

        browserName: 'chrome',

        'chromeOptions': {
            args: ['--disable-browser-side-navigation']
        }

    },

    framework: 'jasmine2',

    specs: ['./Specs/orderSpec.js'],
  //  specs: ['./Specs/adminspec.js'],
    //specs: ['./Specs/customerspec.js','./Specs/adminspec.js'],
  //  specs: ['admin.js'],

    jasmineNodeOpts: {

        defaultTimeoutInterval: 300000
    },

    // for reporting

    onPrepare: function() {
/*
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './LCCReports/reports'

       }))*/

       
       jasmine.getEnv().addReporter(new AllureReporter({
         resultsDir: 'allure-results'
       }));

       browser.driver.manage().window().maximize(),
            browser.ignoreSynchronization = true

    },

};