const path = require('path')
const glob = require('glob')
const log = require('./console-log')

var validate = function(config){
    if(config['webpack_config']===undefined){
        log.error('You must assign a base webpack-config file, config.webpack_config can\'t be a None Object.')
        return
    }
    if(config['mode']===undefined){
        config['mode']='development'
    }
    if(config['output_path']===undefined){
        config['output_path']='./dist'
    }

    return config
}

var makeup = function(config){
    config = validate(config)

    //base webpack config
    let webpack_config = require(path.resolve(config.webpack_config))
    let c = webpack_config

    //mode
    c['mode'] = config['mode']

    //entry + optimization
    let optimization = {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    minSize: 1
                }
            }
        }
    }
    c['entry']={}
    Object.keys(config.entry).forEach(key => {
        let en = config['entry'][key]
        if(en['out']===undefined)en['out']=key
        // console.log(en)
        if(en['mode']=='singular'){
            c['entry'][en['out']]=en['in']
        }else{
            let ins = glob.sync(en['in'])
            c['entry'][en['out']]=ins
            // console.log('ins', ins)
            optimization.splitChunks.cacheGroups[en['out']]={
                name: en['out'],
                chunks: 'all',
            }
        }
    });
    c['optimization']=optimization
    // console.log(optimization)

    //output
    c['output']={
        path: path.resolve(config['output_path']),
        filename: '[name].js'
    }

    // console.log(c)
    return c
}

module.exports = makeup