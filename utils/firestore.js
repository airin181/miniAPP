/* // Import the functions you need from the SDKs you need
const {initializeApp} = require('firebase/app')
require('firebase/storage')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

module.exports = storage, firebase; */