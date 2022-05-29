import { 
  collection, 
  addDoc,
  getDocs 
} from "firebase/firestore";

import db from './firebaseconfig';

const collectionName = "contacts";

export const getContacts = () => getDocs(collection(db, collectionName));

export const saveContact = contact => addDoc(collection(db, collectionName), contact);

