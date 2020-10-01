// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAIHnojzxyvYYd3bXsdxmK0tWKkxMo3EU0",
    authDomain: "listings-app-a37e3.firebaseapp.com",
    databaseURL: "https://listings-app-a37e3.firebaseio.com",
    projectId: "listings-app-a37e3",
    storageBucket: "listings-app-a37e3.appspot.com",
    messagingSenderId: "252066445067",
    appId: "1:252066445067:web:665f836967657449eed40e"
};
firebase.initializeApp(firebaseConfig);


export default firebase;