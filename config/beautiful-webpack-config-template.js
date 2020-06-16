const makeup = require('beautiful-webpack/lib/make-up-config')

config = {
    webpack_config: './webpack-config.js',
    /**
     * @description bundles defines each webpack entries and outputs
     * @param in parameter in is a relative path against the current working directory, it defines where the bundle derived from, and it will combine all the files in the recursive path.
     * @param out parameter out is also a relative path against the current working directory, it defines the output path of the bundle file.
     * @param exclude parameter exclude will help you to remove files from the bundle file that exists in the directory where param in indicated, simplily using regex to match the files's name which you don't want.
     * */ 
    bundles:{
        bundle1: {
            in: "/bundle1",
            out: "/dist/js/bundle1.js",
            exclude: ["\.js/"]
        }
    }
}

module.exports = makeup(config);