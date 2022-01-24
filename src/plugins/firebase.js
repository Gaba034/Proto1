import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAP4pPjFUGVTij0L_tKxugBnbgEaP_8dUU",
  authDomain: "prointme.firebaseapp.com",
  databaseURL: "https://prointme-default-rtdb.firebaseio.com",
  projectId: "prointme",
  storageBucket: "prointme.appspot.com",
  messagingSenderId: "537720563438",
  appId: "1:537720563438:web:fe74943a408bffe3ee35ff",
  measurementId: "G-4Q2ESS59ND"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
  
const profileCollection = db.collection('profile')
const newsCollection = db.collection('news')
const tasksCollection = db.collection('code')
const tasks1Collection = db.collection('code1')
const tasks2Collection = db.collection('code2')
const tasks3Collection = db.collection('code3')
const tasks4Collection = db.collection('code4')
const tasks5Collection = db.collection('code5')
const tasks6Collection = db.collection('code6')
const tasks7Collection = db.collection('code7')
const tasks8Collection = db.collection('code8')
const tasks9Collection = db.collection('code9')
const tasks10Collection = db.collection('code10')
const tasks11Collection = db.collection('code11')
const tasks13Collection = db.collection('code13')



  
  
export {
    db, auth, tasks1Collection , tasks2Collection, tasks3Collection, tasks4Collection, tasks5Collection, tasks6Collection,
     tasks7Collection, tasks8Collection, tasks9Collection, tasks10Collection,tasks11Collection, tasks13Collection, tasksCollection, 
     profileCollection, newsCollection, googleProvider
}

