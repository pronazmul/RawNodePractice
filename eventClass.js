const EventEmitter = require('events')

class School extends EventEmitter {
     start(){
        console.log("Class Started")
        setTimeout(() => {
        this.emit('classSes','Class is Finished, Teacher go back' )
        },3000)        
    }
}

module.exports = School