import {initializeApp} from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyDP_6N_4YDcW3GkCq0gSWnSTD2agn2hpK8",
    authDomain: "seichi-app-8bdb4.firebaseapp.com",
    projectId: "seichi-app-8bdb4",
    storageBucket: "seichi-app-8bdb4.firebasestorage.app",
    messagingSenderId: "866078212047",
    appId: "1:866078212047:web:d7b4c6644ac27fe6d39cba"
};

//Initialize firebase
const app=initializeApp(firebaseConfig);

//ほかのファイルで使えるようにエクスポート
export default app;