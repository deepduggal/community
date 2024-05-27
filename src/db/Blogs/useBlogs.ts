import useRedirectUnauthenticated from "@/hooks/useRedirectUnauthenticated";
import { collectionGroup, type CollectionReference, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getTextsCollection } from "./Blogs";
import { db } from "@/app/firebase";

export default function useBlogs() {
  useRedirectUnauthenticated();
  
  const [textsCollection, setTextsCollection] = useState<DocumentData[]>([]);

  // Get initial data
  useEffect(() => {
    try {
      const allTextsRef = collectionGroup(db, "texts");
      getTextsCollection(allTextsRef as CollectionReference).then((texts) => setTextsCollection(texts));
    }
    catch (err) {
      console.error('Failed to get the Texts collection', err);
    }
  }, []);

  return [textsCollection, setTextsCollection];
}