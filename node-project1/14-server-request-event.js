const http = require('http');

//Using Event Emitter API
const server = http.createServer();

//emits request event
// suscribe to it / listen for it / respond to it

server.on('request' , (req,res) =>{
    res.end('Welcome');
});

server.listen(5000, () => {
    console.log("Listening to the port : 5000....");
})

