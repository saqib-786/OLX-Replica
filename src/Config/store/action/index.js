import { Component } from 'react';
import FigureImage from 'react-bootstrap/esm/FigureImage';
import firebase from '..//../firebase';

// const facebookLogin=()=>{
//     return (dispatch)=>{
//         var provider = new firebase.auth.FacebookAuthProvider();
//         firebase.auth().signInWithPopup(provider)
//         .then(function(result) {
//             var token = result.credential.accessToken;
//             var user = result.user;
//             console.log("working.......")
//           }).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });
//     }
// }
 const sendData =()=>{
    return (dispatch)=>{
        let make = document.getElementById('make').value
        let year = document.getElementById('year').value
        let decription = document.getElementById('decription').value
        let price = document.getElementById('price').value
        let photo = document.getElementById('upload_photo')
        let state = document.getElementById('state').value
        let name = document.getElementById('name').value
       //  let ref = firebase.storage().ref.child(`images/ ${this.state.files.name}`).put(this.state.files)
        firebase.database().ref("/").child('adds').push().set({
              Make: make,
             Year: year,
            // Decription: decription,
           //  Price: price,
           //  State: state,
           //  Name: name,
    
        })
        
}
 }

 

export{
    sendData
}