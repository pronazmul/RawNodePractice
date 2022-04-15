/**
 * Title: HTTP Module Practice
 * Date: 04-25-2022
 */

// Dependencies
const http = require('http');

// Create Server...
const server = http.createServer((req, res)=>{

    if(req.url=== '/'){
        res.write("This is Base URL");
        res.end()
    }else if(req.url=== '/about'){
        res.write("This is About Page")
        res.end()
    }else{
        res.write("Nothing Found")
        res.end()
    }
});

// This Event Will be Fired each Connection
server.on('connection', (socket)=>{
console.log('New Connection...')
});

// Listening To PORT
server.listen(3000);
