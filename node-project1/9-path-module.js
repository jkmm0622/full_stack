const { log } = require('console');
const path = require('path');

//seprator
console.log(path.sep);

//file path
const sPath = path.join('../project1' , 'index.html' );
console.log(sPath);

//base file name
const base = path.basename(sPath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname,'content' , 'subfolder' , 'first.txt');
console.log(absolute);

