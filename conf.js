exports.config = {

    seleniumAddress: 'https://eu1.appium.testobject.com/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function() {
        var caps = browser.getCapabilities();
    },

    multiCapabilities: [{
        testobject_api_key: '2065298F3FB24F229F30BE75CDE8C989',
        testobject_device: 'Google_Pixel_real',
        testobject_test_name: "android - test name",
        testobject_cache_device: "true",
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 25
    }
    // add more configurations here
    ],

    onComplete: function(result) {
        console.log("result is " + result);

        var printSessionId = function(jobName) {
            browser.getSession().then(function(session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Insert Job Name Here");
    }
};
