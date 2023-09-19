import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAryoiJghAFTFmeSLvx2dlgeWGNGVllKgw",
    authDomain: "linked-in-clone-8ac41.firebaseapp.com",
    projectId: "linked-in-clone-8ac41",
    storageBucket: "linked-in-clone-8ac41.appspot.com",
    messagingSenderId: "914883498672",
    appId: "1:914883498672:web:dfd1fb21fe9899e816e175"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth()

  export {db,auth}