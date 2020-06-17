// const makeup = require('./lib/make-up-config')
const makeup = require('beautiful-webpack/lib/make-up-config')

config = {
    /**
     * @description webpack mode
     * @choice production | development(by default)
     */
    mode: 'development',
    /**
     * @description describe the webpack-config's source file. If not specified, there will be a mistake.
     */
    webpack_config: './webpack.config.js',
    /**
     * @description bundles defines each webpack entries and outputs. make sure the position of each entries you write is right in the logical order.
     * @param in parameter in is a relative path against the current working directory, it defines where the bundle derived from, and it will combine all the files in the recursive path.
     * @param out parameter out is also a relative path against output path, it defines the output path of the bundle file.
     * @param exclude parameter exclude will help you to remove files from the bundle file that exists in the directory where param in indicated, simplily using regex to match the files's name which you don't want.
     * */ 
    entry: {
        index: {
            mode: 'singular',
            in: './app/index.js',
            out: './index'
        }
    },
    /**
     * @description output_path define the base path of builded files.
     */
    output_path: './dist',
}

module.exports = makeup(config);