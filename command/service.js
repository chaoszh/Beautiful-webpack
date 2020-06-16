//beautiful webpack
const path = require('path')
const fs = require('fs')
const log = require('../lib/console-log')
const myexec = require('../lib/myexec')
const makeup = require('../lib/make-up-config').makeup

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
    let config = require(config_path)
    // console.log('config', config)
    // console.log(await myexec(`webpack --config ${config_path}`))
}

var run = async function(config_path){
    // console.log(await myexec(`webpack --config ${config_path}`))
}

module.exports = {
    init,
    build,
    run
}