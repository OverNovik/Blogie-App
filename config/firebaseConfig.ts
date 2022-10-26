import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB1Cn5ES-dB2k0n2ex-qyOJemCNL1pHxFQ',
  authDomain: 'blogie-a0fbb.firebaseapp.com',
  databaseURL:
    'https://blogie-a0fbb-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blogie-a0fbb',
  storageBucket: 'blogie-a0fbb.appspot.com',
  messagingSenderId: '457492448565',
  appId: '1:457492448565:web:d11f43a032858f210db87c',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
