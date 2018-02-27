const env = require ('../environments/environment.ts')

// var client = require('twilio')
// var accountSid = 'AC0c2c827d589da68da67f9cf7ad105caf',
// var authToken = '55af47b15e806e1bc0ec1557a5481894';
 
client.messages.create({
  from: '+17159727059 ',
  to: '+17204199292',
  body: "You just sent an SMS from Node.js using Twilio!"
}).then((messsage) => console.log(message.sid));