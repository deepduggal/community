import { db } from "@/app/firebase";
import { doc, getDoc, getDocs, updateDoc, type CollectionReference } from "firebase/firestore";

// Get the Texts collection
export const getTextsCollection = async (collectionRef: CollectionReference) => {
  try {
    const querySnapshot = await getDocs(collectionRef);
    const texts = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return texts;
  }
  catch (err) {
    console.error('Failed to get the Texts collection', err);
    return [];
  }
};

// Get the Texts collection
export const getTextsDoc = async (id: string) => {

  try {
    const docRef = doc(db, "texts", id); // Create a DocumentReference object
    const querySnapshot = await getDoc(docRef);
    const text = querySnapshot.data();
    return text;
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
export const updateTextDoc = async (docId: string, newData: {}) => {
  try {
    const docRef = doc(db, "texts", docId); // Create a DocumentReference object
    await updateDoc(docRef, newData); // Pass the DocumentReference object as the first argument
  } catch (err) {
    console.error('Failed to update a Texts document', err);
  }
};

/**
 * Add a comment to a blog post
 * @param blogId 
 * @param oldComments 
 * @param newComment 
 */
export const addComment = async (blogId: string, oldComments: {date: 'string', content: 'string'}[],  newComment: {date: 'string', content: 'string'}) => {
  try {
    const docRef = doc(db, "texts", blogId); // Create a DocumentReference object
    
    await updateDoc(docRef, {
      comments: [...oldComments, {date: new Date() , content: newComment}]
    });
  } catch (err) {
    console.error('Failed to add a comment to a Blog document', err);
  }
};