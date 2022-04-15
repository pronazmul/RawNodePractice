/**
 * Title: HTTP Module Practice
 * Date: 04-25-2022
 */

// Dependencies
const http = require('http');
const url = require('url')

// Create Server...
const server = http.createServer((req, res)=>{

    // Parse the url...
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname=== '/'){
        res.write("This is Base URL");
        res.end()
    }else if(parsedUrl.pathname=== '/about'){
        res.write("This is About Page")
        res.end()
    }else{
        res.write("Nothing Found")
        res.end()
    }
});

// Listening To PORT
server.listen(3000);