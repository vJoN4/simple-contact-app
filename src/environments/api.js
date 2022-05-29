import { collection, getDocs } from "firebase/firestore";

import db from './firebaseconfig';

const collectionName = "contacts";

export const getContacts = () => {
  try {
    return getDocs(collection(db, collectionName))
  } catch (error) {
    console.log("-->", error);
  }
};
