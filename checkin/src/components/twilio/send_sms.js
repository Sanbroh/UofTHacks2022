// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACcd171c9fcb656dc213a71c71d22ef65a';
const authToken = '9f8dadad94e008eda5d1150284443af9';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hi! Thank you for volunteering with CheckIn, we will keep you updated here with nearby opportunities! Text -STOP to stop.',
     from: '+19035012993',
     to: '+16476758677'
   })
  .then(message => console.log(message.sid));
