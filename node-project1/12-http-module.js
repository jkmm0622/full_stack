const http = require('http');

//Craeting server
const server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.end('Home Page');
        return;
    }

    if(req.url === '/about'){
        res.end('About Page');
        return;
    }

    if(req.url === '/user'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name : "Jitendta" }));
        return;
    }

    // Default
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>`);
    
    
});

server.listen(5000);


