const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token

const client = new twilio(accountSid, authToken);

const twilioNumber = '+17159727059' // your twilio phone number


/// start cloud function

exports.textStatus = functions.database
       .ref('/clients/{id}/sms')
       .onUpdate(event => {


    const sms = event.params.sms

    return admin.database()
                // .ref(`/orders/${orderKey}`)
                .ref('/clients/{id}/sms')
                .once('value')
                .then(snapshot => snapshot.val())
                .then(order => {
                    const status      = client.status
                    const phoneNumber = client.phoneNumber

                    if ( !validE164(phoneNumber) ) {
                        throw new Error('number must be E164 format!')
                    }

                    const textMessage = {
                        body: `This is a test SMS`,
                        to: +17204199292,  // Text to this number
                        from: twilioNumber // From a valid Twilio number
                    }

                    return client.messages.create(textMessage)
                })
                .then(message => console.log(message.sid, 'success'))
                .catch(err => console.log(err))


;


/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}