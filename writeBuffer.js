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


