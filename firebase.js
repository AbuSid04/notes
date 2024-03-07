import { initializeApp } from "firebase/app"
import { getFirestore , collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApuPSuhJ-sPBUu9pDmQRs3mnSK__jMlb4",
  authDomain: "react-notes-adb9d.firebaseapp.com",
  projectId: "react-notes-adb9d",
  storageBucket: "react-notes-adb9d.appspot.com",
  messagingSenderId: "120874997832",
  appId: "1:120874997832:web:e7b00356c6648d3e0ee07d"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")