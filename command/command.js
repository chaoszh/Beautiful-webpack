const path = require("path")
const service = require("./service")

var init = (config_path)=>{
    if(config_path==undefined) config_path = path.resolve('./beautiful-webpack.config.js');
    else config_path = path.resolve(config_path);
    service.init(config_path);
}

var build = (config_path)=>{
    if(config_path==undefined) config_path = path.resolve('./beautiful-webpack.config.js');
    else config_path = path.resolve(config_path);
    service.build(config_path);
}

var run = (config_path)=>{
    if(config_path==undefined) config_path = path.resolve('./beautiful-webpack.config.js');
    else config_path = path.resolve(config_path);
    service.run(config_path);
}

var command = {
    init,
    build,
    run
}

module.exports = command