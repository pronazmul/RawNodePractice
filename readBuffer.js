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