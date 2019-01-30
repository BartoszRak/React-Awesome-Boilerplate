import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
}
const firebase = firebaseApp.initializeApp(config)
const firestore = firebaseApp.firestore()
firestore.settings({})

export default firebase
