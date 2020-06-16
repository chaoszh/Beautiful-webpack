const chalk = require('chalk')

var log = {
    info: function(message){
        console.log(
            chalk.bgBlue("INFO")+" "+
            chalk.blue(message)
        );
    },
    error: function(message){
        console.log(
            chalk.bgRed("ERR!")+" "+
            chalk.red(message)
        );
    },
    pack_start: function(){
        console.log(
            chalk.bgBlue("INFO")+" "+
            chalk.blue("beautiful-webpack is working...")
        );
    },
    pack_end: function(){
        console.log(
            chalk.bgBlue("INFO")+" "+
            chalk.blue("beautiful-webpack is completed!") + '\n'
        );
    },
    print_author: function(){
        console.log(
            ">>> If you enjoy using beautiful-webpack, \n"+
            ">>> don't hesitate to follow me on my github page \n\n\t"+
            chalk.bold("https://github.com/chaoszh")+"\n\n"+
            chalk.yellow(">>> also, the author is looking for a great job :) feel free to contact.")
        );
    }
}

module.exports=log