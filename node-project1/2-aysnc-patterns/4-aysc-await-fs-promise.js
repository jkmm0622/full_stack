const { readFile , writeFile } = require('fs').promises

const start = async () =>{
    try {
        var first = await readFile('./content/subfolder/first.txt','utf8');
        var second = await readFile('./content/subfolder/second.txt','utf8');
        console.log(first,second)
        // Here I am not assigning to a variable , bacause writeFile file returns undefined
        
        await writeFile('./content/subfolder/third.txt',
        `This is awesome : ${first} ${second}`,{ flag : 'a' }
        );

    } catch (error) {
        console.log(error);
    }
}

start();

