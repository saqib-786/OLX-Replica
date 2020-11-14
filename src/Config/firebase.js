import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBgCN2W-Xqcn2TeC-TaAjO3r5tY8OnFSLQ",
    authDomain: "olxreplica-6a3be.firebaseapp.com",
    databaseURL: "https://olxreplica-6a3be.firebaseio.com",
    projectId: "olxreplica-6a3be",
    storageBucket: "olxreplica-6a3be.appspot.com",
    messagingSenderId: "75618272841",
    appId: "1:75618272841:web:b883e065d3b4a292216198",
    measurementId: "G-RES2DKR1FV"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase