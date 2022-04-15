## Some Important Concepts About NodeJS:
JavaScript Was InterPrated Language Before V8 Engine Introducd. V8 has given JavaScript Superpowe Like JIT (Just In Time) Compilation.

- How It Works
  - Sigle Threaded
  - Asynchronously
  - NoN Blocking I/O

## How Works Behind The Schene: 

- `CPU INtencive Tasks`: As we know Whenever Someone Requested on Server than a thread Recieves the task. If it's like calculative Than thread has to manage it as node js has only one thread so it's block other request. That's why it's said that nodejs is not good for CPU Intensive Task.

- `I/O Intencive Tasks`: If it's like Have to Collect data from another database/server or work with file system than it's Known as `I/O (Input Output)` Intensive Tasks, Just pass the taks to a worker. NodeJs is switable for this because it has multiple workers Main thread never be engaged It's free always to receive any request. 

- `Single Threaded`: Node JS has only one thread But Multiple workers It's perfect for I/O intensive Tasks but not Switable for CPU Intensive Tasks. 

- `What are Workers`: NodeJS uses a librery `liveUp` which Specially Designed for NodeJs but uses multile places. Behind the schene This Library uses Operating System Karnel and karnel has lot of threads. So Nodejs workers are System Threads. 

## Global Obejct and Module System: 

- `Global Object`: Node Js has no window object, Because window object has designed for only brwser. Node Js Has not nacesity using window object. It has Similer one named `global` with limited number of properties like `timeout`, `interval`. Other important thing any variable on node js never hoisted on global object.


- `Modular System`: In Node Js Each JS file is module and it's incapsulated no data will be exposed if you not export module. On Client side wite multiple js file include all files in a file than all togather creates a single file, there name convension is important and may be conflicted. NodeJs Behind the Schene Uses Vanilla JS IFEE concepts, Each file is incapsulated by IFEE invisibally. And Most Important thing By default it get some parameter `exports, require, module, __filename, __dirname` By default Module export an empty obejct. There Are Three types of module. 
  - Nodejs Build in Module `const path = require('path')`
  - User Defined Module `const customModule = require('./fileName')`
  - Third Perty Module `const express = require('express')`











