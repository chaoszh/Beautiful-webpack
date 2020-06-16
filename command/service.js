//beautiful webpack
const path = require('path')
const fs = require('fs')
const log = require('../lib/console-log')
const myexec = require('../lib/myexec')
const process = require('process')

var init = async function(config_path){
    // 开始运行
    log.pack_start()
    // 创建b-w-config.js文件
    try{
        fs.openSync(config_path, "wx+")
    }catch(e){
        log.error("beautiful-webpack is already inited.")
        log.error("or you can try to delete the config file, and init beautiful webpack again!")
        return
    }
    // 复制b-w-config-template文件
    try{
        let src = path.join(__dirname, '../config/beautiful-webpack-config-template.js')
        let dst = config_path
        let readable = fs.createReadStream(src)
        let writable = fs.createWriteStream(dst)
        readable.pipe(writable)
    }catch(e){
        console.log(e)
        log.error("Failed to create the config file from beautiful-webpack template.")
    }
    // 结束运行
    log.pack_end()
    log.print_author()
}

var build = async function(config_path){
    config_path = path.relative(path.resolve(), config_path)
    log.info("b-webpack start building.")
    console.log(await myexec(`npx webpack --mode production --config ${config_path}`))
    log.info("b-webpack succeed.")
}

var run = async function(config_path){
    process.on('SIGINT', function () {
        log.info("bye!")
        process.exit();
    });
    config_path = path.relative(path.resolve(), config_path)
    log.info("b-webpack start running.")
    console.log(await myexec(`npx webpack-dev-server --config ${config_path}`))
}

module.exports = {
    init,
    build,
    run
}