const { readFile } = require('fs');

console.log("Starting first task");

readFile('./content/subfolder/first.txt', 'utf8' , (err,result) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(result);
    console.log("completing first task");
});

console.log("starting next task");

