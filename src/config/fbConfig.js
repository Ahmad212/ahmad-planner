import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "****************************",
    authDomain: "ahmad-planner.firebaseapp.com",
    databaseURL: "https://ahmad-planner.firebaseio.com",
    projectId: "ahmad-planner",
    storageBucket: "ahmad-planner.appspot.com",
    messagingSenderId: "202023734389",
    appId: "1:202023734389:web:836c326467e06b51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase
