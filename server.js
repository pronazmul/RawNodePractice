/**
 * Title: OS (Operating System) Module Practice
 * Date: 04-25-2022
 */

// Dependencies
const http = require('http');
const path = require('path');

// Create Server...
const server = http.createServer((req, res)=>{
    if(req.url=== '/'){
        const filename= path.basename(__dirname);
        const extension = path.extname(__filename);
        const filepath = path.join(__dirname,'./', 'path.png');

        res.write("Your file name is "+filename+"\n");
        res.write("Your File extension is "+extension+"\n");
        res.write("Your Image file path is "+filepath+"\n");
        res.end()
    }else{
        res.write("Nothing Found")
        res.end()
    }
});

// Listening To PORT
server.listen(3000);