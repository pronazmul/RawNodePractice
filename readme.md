## Node.js File System `fs` Module

- The Node.js file system module allows you to work with the file system on your computer

- common use for the file system module : 
  - Read Files.
  - Create Files.
  - Update Files.
  - Delete Files. 
  - Rename Files.

- Here Has One important thing to know 
  - When Ever you are Working With File using methods below like this `fs.readFile()` this methods will work acsyncronously and if you just use `fs.readFileSync()` Than it will work syncrhonously. You should have to use as your requirment. But `rcommanded to use asynchronously`. 

- Read Files: 
  - The fs.readFile() method is used to read files on your computer.

```js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

- Create Files `Below fs modules used to create new file`: 
  - fs.appendFile()
  - fs.open()
  - fs.writeFile()

  - The `fs.appendFile()` method appends specified content to a file. If the file does not exist, the file will be created:

```js
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

  - The `fs.open()` method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

```js
var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```
  - The `fs.writeFile()` method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

```js
  var fs = require('fs');

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
```

- Update Files
  - fs.appendFile()
  - fs.writeFile()  

```js
  var fs = require('fs');

  fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
```

- The `fs.writeFile()` method replaces the specified file and content:
```js
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
```

- To delete a file with the File System module,  use the `fs.unlink()` method.

```js
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```



- To rename a file with the File System module,  use the `fs.rename()` method.


```js
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```
