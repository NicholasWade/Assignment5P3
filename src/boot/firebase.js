import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
    apiKey: "AIzaSyD5YUB-ENQG7rBivbEu9pLJyeoN5vbFrNw",
    authDomain: "maverick-dd0be.firebaseapp.com",
    databaseURL: "https://maverick-dd0be.firebaseio.com",
    projectId: "maverick-dd0be",
    storageBucket: "maverick-dd0be.appspot.com",
    messagingSenderId: "259227163549",
    appId: "1:259227163549:web:a952385fbac822f46f2d74"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
