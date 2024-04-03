// src/config/firebaseAdminInit.js or backend/firebaseAdminInit.js

const admin = require('firebase-admin');
const serviceAccount = require('../service_account.json'); // Adjust the path as necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
