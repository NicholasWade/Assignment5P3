import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
    apiKey: "AIzaSyB-34WdRfazKpLAP2DFrAgsxAmgPxYsaRg",
    authDomain: "maverick-todo-37fa5.firebaseapp.com",
    databaseURL: "https://maverick-todo-37fa5.firebaseio.com",
    projectId: "maverick-todo-37fa5",
    storageBucket: "maverick-todo-37fa5.appspot.com",
    messagingSenderId: "166811971990",
    appId: "1:166811971990:web:88a0699df66e1a2ba2edb7"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
