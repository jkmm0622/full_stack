const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// Flavour - 1 ( Without arguments)
customEmitter.on('response1' , ()=>{
    console.log(`Data received successfully1`);
});

customEmitter.on('response1' , ()=>{
    console.log(`Data received successfully2`);
});

customEmitter.emit('response1');

// Flavour - 2 (with arguments)
customEmitter.on('response2' , (name,id)=>{
    console.log(`Data : ${name} ${id}`);
});

customEmitter.on('response2' , ()=>{
    console.log(`Data : 2 `);
});

customEmitter.emit('response2','john',34);
