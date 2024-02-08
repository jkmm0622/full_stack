const { readFile ,writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    });
}

const setText = (path, value) => {
    return new Promise((resolve, reject) => {
        writeFile(path, value, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const start = async () =>{
    try{
        const first = await getText('./content/subfolder/first.txt');
        const second = await getText('./content/subfolder/second.txt');
        const third  = await setText('./content/subfolder/third.txt' , `${first} ${second}`);
        console.log(first,second);
        console.log(third);
    } catch (error){
        console.log(error);
    }
}

start();
