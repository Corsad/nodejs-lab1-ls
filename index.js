#!/usr/bin/env babel-node

let path = require('path')
let yargs = require('yargs').default('dir', __dirname)
                            .argv
let ls = require("./ls.js")
let flatten = require("flatten")
let dir = yargs.dir;

ls(dir).then(data => {
    let temp = flatten(data) 
    temp.forEach(function(element) {
        console.log(element)
    }, this);
})


// process.stdout.write(ls(dir))



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