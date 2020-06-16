const exec = require("child_process").exec;

function myexec(command) {
    return new Promise(function (resolve, reject) {
        exec(command, function (err, stdout, stderr) {
            if (err) {
                reject(err);
            } else if (stderr.lenght > 0) {
                reject(new Error(stderr.toString()));
            } else {
                resolve(stdout);
            }
        })
    })
}

module.exports=myexec