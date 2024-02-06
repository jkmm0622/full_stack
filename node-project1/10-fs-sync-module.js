//synchronous 
const { readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/first.txt' , 'utf8');
const second = readFileSync('./content/subfolder/second.txt' , 'utf8');

console.log(first,second);

// write or overwrite 
writeFileSync('./content/subfolder/result-sync.txt',
`The is file first : ${first} , This is file second : ${second}`);

// write or overweite with append
writeFileSync('./content/subfolder/result-sync.txt' , 
'Append Value' , { flag : 'a'});