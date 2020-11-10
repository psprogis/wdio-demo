let wdioConfig = require("./wdio.conf").config;

let ciConfig = Object.assign({}, wdioConfig);

// override some properties for ci run
ciConfig.hostname = 'ip-5236.sunline.net.ua';

// do not start selenium locally
ciConfig.services = undefined;

// selenoid options
ciConfig.capabilities[0]["selenoid:options"] = {
    enableVNC: true,
    name: 'wdio demo project'
};

exports.config = ciConfig;