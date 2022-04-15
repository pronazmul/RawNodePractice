/**
 * Title: HTTP Module Practice
 * Date: 04-25-2022
 */

// Dependencies
const http = require('http');
const url = require('url');
const fs = require('fs');

// Create Server...
const server = http.createServer(async(req, res)=>{

    // Parse the url...
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname=== '/readFile'){
        fs.readFile('test.txt', (error, data)=>{
            res.write(data)
            return res.end()
        })
    }else if(parsedUrl.pathname=== '/readFileSync'){
        let data = fs.readFileSync('test.txt')
            res.write(data)
            return res.end()
    }else{
        res.write("Nothing Found")
        res.end()
    }
});

// Listening To PORT
server.listen(3000);