require('./helper')
let path = require('path')
let fs = require('fs').promise

async function ls(name, dir) {
  let stat = await fs.stat(dir)
  if(!fs.access(dir)){

  } else {
    if(!stat.isDirectory()){
      process.stdout.write(name + "\n")
    }else {
      // Use 'await' inside 'async function's
      let fileNames = await fs.readdir(dir)
      // console.log(fileNames)
      fileNames.forEach(function(element) {
        let temp = dir + "/" + element
        ls(element, temp)
      }, this);
    }
  }
}

module.exports = ls
