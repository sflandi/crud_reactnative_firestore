import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

// // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// var firebaseConfig = {
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     databaseURL: "https://PROJECT_ID.firebaseio.com",
//     projectId: "PROJECT_ID",
//     storageBucket: "PROJECT_ID.appspot.com",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     measurementId: "G-MEASUREMENT_ID",
// };

const firebaseConfig = {
    apiKey: "AIzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "1:11xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
