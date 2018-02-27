// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// var twilio={

// TWILIO_ACCOUNT_SID: 'AC0c2c827d589da68da67f9cf7ad105caf',
// TWILIO_AUTH_TOKEN: '55af47b15e806e1bc0ec1557a5481894',
// TWILIO_PHONE_NUMBER:'+17159727059 ',
// CELL_PHONE_NUMBER: '+17204199292',
// }

export const environment = {
  production: false, 
  firebase: {
  apiKey: "AIzaSyBj8sLXzVLCca_EkvTIuDHBkXASMW7-V8I",
  authDomain: "tattoo-prod.firebaseapp.com",
  databaseURL: "https://tattoo-prod.firebaseio.com",
  projectId: "tattoo-prod",
  storageBucket: "tattoo-prod.appspot.com",
  messagingSenderId: "322575892240",
},


};

// firebase functions:config:set twilio.sid="AC0c2c827d589da68da67f9cf7ad105caf" twilio.token="55af47b15e806e1bc0ec1557a5481894"