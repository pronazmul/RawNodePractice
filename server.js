const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url==='/'){
        res.write(`
        <html>
            <head>
                <title>Write Here</title>   
            </head>
        <body>
        `)

        res.write(`
            <form action='/process' method='post'>
                <input type="text" name="data" placeholder="Pass Data Here"/>
            </form>
        <body>
        </html>`)
        return res.end()
    }else if(req.url==='/process' && req.method==='POST'){
        let body = []
        // Recieve Buffer Chunk by Chunk and push it to an array, Req is a readable stream
        req.on('data', (chunk) => body.push(chunk))

        // When all the data is recieved Make All Buffer Chunks to a String
        req.on('end', () => {
            console.log("Data Recived Done")
            body = Buffer.concat(body).toString()

            res.write(body)
            return res.end()
        })
    }else if(req.url==='/read'){
        let readStream = fs.createReadStream('./read.txt', 'utf8')
        //Write Stream as a response, response is a writable stream
        readStream.pipe(res)
    }else{
        res.write('Not Found')
        return res.end()
    }
})


server.listen(5000)