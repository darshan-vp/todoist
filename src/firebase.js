import firebase from 'firebase/app'
import 'firebase/firestore'

const fireBaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAZZ_dx22HPeBRwchMRJnOifG-iTu4rJYM",
    authDomain: "todoist-e03ff.firebaseapp.com",
    databaseURL: "https://todoist-e03ff.firebaseio.com",
    projectId: "todoist-e03ff",
    storageBucket: "todoist-e03ff.appspot.com",
    messagingSenderId: "189271006778",
    appId: "1:189271006778:web:6e22a099cab5b555971f03"
})

export {fireBaseConfig as firebase}