const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config(); // Load .env file (optional)

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
});

const db = admin.firestore();

module.exports = { db };
