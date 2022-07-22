import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcVMlbFPdAlmWKBK7FvHCQMnkGw_Fn72o",
  authDomain: "mymoney-8a5fd.firebaseapp.com",
  projectId: "mymoney-8a5fd",
  storageBucket: "mymoney-8a5fd.appspot.com",
  messagingSenderId: "222701924966",
  appId: "1:222701924966:web:3c34bee6385f3aa289b3a7"
};
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }