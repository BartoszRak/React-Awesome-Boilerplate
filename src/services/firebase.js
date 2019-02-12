import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_APIKEY || 'apiKey',
  authDomain: process.env.REACT_APP_AUTHDOMAIN || 'authDomain',
  databaseURL: process.env.REACT_APP_DATABASEURL || 'databaseUrl',
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID || 'messagingSenderId',
  projectId: process.env.REACT_APP_PROJECTID || 'projectId',
  storageBucket: process.env.REACT_APP_STORAGEBUCKET || 'storageBucket',
}
const firebase = firebaseApp.initializeApp(config)
const firestore = firebaseApp.firestore()
firestore.settings({})

export default firebase
