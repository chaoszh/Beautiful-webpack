const sayhi = require('../component/sayhi')
const saybye = require('../component/saybye')

function teacher(name){
    this.name = name;
    console.log(`my name is ${name}, I am a teacher.`);
    sayhi();
    saybye();
}

new teacher('Lily')