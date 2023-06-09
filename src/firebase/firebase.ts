import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

declare let process: any;

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

console.log(process.env);
console.log(config);

const firebaseApp = initializeApp(config);
export const firestore = getFirestore(firebaseApp);

export { firebaseApp };