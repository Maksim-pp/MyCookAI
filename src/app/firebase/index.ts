import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIERBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIERBASE_APUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIERBASE_PROJECR_ID,
    storageBucket: import.meta.env.VITE_FIERBASE_STOREGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIERBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIERBASE_APP_ID,
};

initializeApp(firebaseConfig);
