const School = require('./eventClass')
const school = new School()

// Listening And Event:
school.on('classSes', function(data) {
  console.log(data);
});


// Event Raised:    
school.start()