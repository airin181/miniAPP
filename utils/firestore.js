const { initializeApp } = require("firebase/app");
const firebaseConfig = require('../config/config-firebase');

const db = initializeApp(firebaseConfig);

module.exports = db;