/**
 * Title: OS (Operating System) Module Practice
 * Date: 04-25-2022
 */

// Dependencies
const http = require('http');
const os = require('os');

// Create Server...
const server = http.createServer((req, res)=>{
    if(req.url=== '/'){
        const platform= os.platform();
        const arch= os.arch();
        const freemem= os.freemem();
        const type= os.type();
        console.log({platform,arch,freemem,type})

        res.write("Your Platform is "+platform+"\n");
        res.write("Your Architecture is "+arch+"\n");   
        res.write("Your Free Memory is "+freemem+"\n");
        res.write("Your OS Type is "+type+"\n");
        res.end()
    }else{
        res.write("Nothing Found")
        res.end()
    }
});

// Listening To PORT
server.listen(3000);