require('ts-node').register({ files: true });

exports.config = {
    hostname: "localhost",
    port: 4444,
    path: "/wd/hub",
    sync: true,
    
    runner: 'local',
    specs: [
        './tests/*.ts'
    ],

    // https://docs.saucelabs.com/reference/platforms-configurator
    capabilities: [{  
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,
    // baseUrl: 'http://ip-5236.sunline.net.ua:38015/',
    baseUrl: 'https://www.uoduckstore.com/',

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,

    // Default request retries count
    connectionRetryCount: 3,

    services: ['selenium-standalone'],   
    framework: 'mocha',
    reporters: ['spec'],  

    // Options to be passed to Mocha. See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
}
