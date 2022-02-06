// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.ACcd171c9fcb656dc213a71c71d22ef65a;
const authToken = process.env.211c6b3d720887951856ffc8217be3a5;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19035012993',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));
