## Node JS Stream and Buffer
- Buffer is a binary data type. Data flow over node js like receive data from http request or read data from a file all are happend by Buffer. Buffer Consist of a number from small part. This process is known as stream.

- It Performs well while processing a big data. Pass data chunk by chunk user dosen't need to wait can get small pice of data smoothly. Parfect example is youtube It dosen't provide a video at a glance load the video by Buffer. Wenever we pull the video it shows loading sign that means it wait's for the Buffer. 


-  Read File Data as Buffer
  - data listener read data chunk by chunk and end listener confirms data read finished.

```js
const fs = require('fs')

// Create a read stream
const readStream = fs.createReadStream(__dirname + '/read.txt');

//Listen to data event
readStream.on('data',(chunk)=>{
    console.log(chunk.toString())
})

//Listen to end event
readStream.on('end',()=>{
    console.log('Read stream closed')
})

```


-  Write Data as Buffer
  - There has another cool method `.pipe()` We can simply pass the writable Stream inside it. 

```js
const fs = require('fs')

// Create a read stream
const readStream = fs.createReadStream(__dirname + '/read.txt');
//Listen to data event
const writeStream = fs.createWriteStream(__dirname + '/write.txt');

//Listen to data event
// readStream.on('data',(chunk)=>{
//         writeStream.write(chunk)
// })

// Another Way to Write
readStream.pipe(writeStream)

//Listen to end event
readStream.on('end',()=>{
    console.log('Write stream closed')
})

```

-  Receive Data As HTTP Req body As Buffer
  - NOTE `req is a readable stream we Read data using on listener`

```js
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
    }else{
        res.write('Not Found')
        return res.end()
    }
})

server.listen(5000)

```


-  Pass Data As HTTP Response body As Buffer
  - NOTE `res is a writable stream we can use pipe() method on it`

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

if(req.url==='/read'){
        let readStream = fs.createReadStream('./read.txt', 'utf8')
        //Write Stream as a response, response is a writable stream
        readStream.pipe(res)
    }else{
        res.write('Not Found')
        return res.end()
    }
})
server.listen(5000)

```

