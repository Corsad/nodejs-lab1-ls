let path = require('path')
let yargs = require('yargs').default('dir', __dirname)
                            .argv
let ls = require("./ls.js")

let dir = yargs.dir;
// ls()

ls(dir, dir)



// function* printNumbers() {
//     var num = 1;

//     if(num > 10) {
//         return false;
//     }

//     yield num++;
// }

// var generator = printNumbers();
// var result;

// while(result = generator.next().value) {
//     console.log(result);
// }