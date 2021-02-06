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
    apiKey: "AIzaSyCRZ8x1ghmpXWMnve9I32ic050E_1mglL4",
    authDomain: "reactnativecrud-cb246.firebaseapp.com",
    databaseURL: "https://reactnativecrud-cb246.firebaseio.com",
    projectId: "reactnativecrud-cb246",
    storageBucket: "reactnativecrud-cb246.appspot.com",
    messagingSenderId: "111931196764",
    appId: "1:111931196764:android:5ce890a033618263ea6d99"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;