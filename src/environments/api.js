import { 
  collection, 
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";

import db from './firebaseconfig';

const collectionName = "contacts";

export const getContacts = () => getDocs(collection(db, collectionName));

export const saveContact = contact => addDoc(collection(db, collectionName), contact);

export const updateContact = contact => updateDoc(doc(db, collectionName, contact.id), contact);

export const deleteContact = id => deleteDoc(doc(db, collectionName, id))
