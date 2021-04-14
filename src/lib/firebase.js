// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBMGC0oITHkMuH7zsGJnvyuH9ADITkc-ks",
  authDomain: "react-instagram-clone-26601.firebaseapp.com",
  projectId: "react-instagram-clone-26601",
  storageBucket: "react-instagram-clone-26601.appspot.com",
  messagingSenderId: "490408003054",
  appId: "1:490408003054:web:7f792c74ea956b8558faff",
  measurementId: "G-2E7MF4YH83"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };