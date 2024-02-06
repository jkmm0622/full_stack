//Asynchronous
const { readFile , writeFile} = require('fs');

console.log("Start");

readFile('./content/subfolder/first.txt' , 'utf8' ,(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/subfolder/second.txt' , 'utf8' ,(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/subfolder/result-async.txt' , 
            `Here is combination ${first} , ${second}`,  (err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log("Done with Result : ",result);
             });

    });
});

console.log("Starting Next Task");