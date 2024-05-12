import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { async } from "../api/route";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAI,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchTodos() {
  const q = query(collection(db, "todos"));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return [];
  }
  const fetchedTodos = [];

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());

    const item = {
      id: doc.id,
      title: doc.data()["title"],
      is_done: doc.data()["is_done"],
      create_at: doc.data()["create_at"].toDate(),
    };
    console.log(item);
    fetchedTodos.push(item);
  });

  return fetchedTodos;
}
