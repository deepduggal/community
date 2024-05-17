import { doc, getDocs, updateDoc } from "firebase/firestore";

// Get the Texts collection
export const getTextsCollection = async (collectionRef) => {
  try {
    const querySnapshot = await getDocs(collectionRef);
    const texts = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    console.log(texts);
    return texts;
  }
  catch (err) {
    console.error('Failed to get the Texts collection', err);
    return [];
  }
};

/**
   * Updates a Texts collection's document
   * @param docId - The document ID
   * @param newData - The new data to update the document with
   */
export const updateTextDoc = async (docId: string, newData) => {
  try {
    const docRef = doc(db, "texts", docId); // Create a DocumentReference object
    await updateDoc(docRef, newData); // Pass the DocumentReference object as the first argument
  } catch (err) {
    console.error('Failed to update a Texts document', err);
  }
};