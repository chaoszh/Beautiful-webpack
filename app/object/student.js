const sayhi = require('../component/sayhi')
const saybye = require('../component/saybye')

function student(name){
    this.name = name;
    console.log(`my name is ${name}, I am a student.`);
    sayhi();
    saybye();
}

new student('Jinx')