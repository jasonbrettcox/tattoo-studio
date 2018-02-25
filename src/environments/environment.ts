// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  firebase: {
  apiKey: "AIzaSyBj8sLXzVLCca_EkvTIuDHBkXASMW7-V8I",
  authDomain: "tattoo-prod.firebaseapp.com",
  databaseURL: "https://tattoo-prod.firebaseio.com",
  projectId: "tattoo-prod",
  storageBucket: "tattoo-prod.appspot.com",
  messagingSenderId: "322575892240"
}
};
