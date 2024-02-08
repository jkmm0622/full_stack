const { readFile , writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () =>{
    try {
        var first = await readFilePromise('./content/subfolder/first.txt','utf8');
        var second = await readFilePromise('./content/subfolder/second.txt','utf8');
        console.log(first,second)
        // Here I am not assigning to a variable , bacause writeFile file returns undefined
        
        await writeFilePromise('./content/subfolder/third.txt',
        `This is awesome : ${first} ${second}`);

    } catch (error) {
        console.log(error);
    }
}

start();

