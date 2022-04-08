import firebase from "firebase";
import {
    collection,
    addDoc,
} from 'firebase/firestore';
import firebaseApp from 'firebase/app';



const firebaseConfig = {
    apiKey: 'AIzaSyDwNEwQ07GCio2bSOc5s2o6qthTzyzpO2Y',
    authDomain: 'mywedding-3c67a.firebaseapp.com',
    projectId: 'mywedding-3c67a',
    storageBucket: 'mywedding-3c67a.appspot.com',
    messagingSenderId: '429876417546',
    appId: '1:429876417546:web:8c362874df228eab587bf3',
    measurementId: 'G-1L461S02HG'
};

export let auth;
export let db;

export default function init() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    auth = firebaseApp.auth();
    db = firebase.firestore();
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        return { ok: true };
    } catch (err) {
        return { ok: false, error: err };
    }
}

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        alert(err);
    }
};

export const logout = async () => await auth.signOut();
