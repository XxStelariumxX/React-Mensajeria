import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc} from "./firebase";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { query, addDoc } from "firebase/firestore";

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, {});

        //Aparte pasale el correo a la base de datos:
        const docRef2 = doc(db, 'users', user.uid, 'email');
        await addDoc(docRef2, {email});

        return user.uid;
    } catch (err) {
        return err;
    }
}

export const signIn = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user.uid;
    } catch (err) {
        return err.message;
    }
}

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(result => {
        return result.user;
    });
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);

//See Messages:
export const getMessagesByUserId = async (userId) => {
  const colRef = query(collection(db, 'users', userId, 'messages'));
  const result = await getDocs(colRef);
  return result.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

//See mails from everyone:
export const getAllMails = async () => {
  const colRef = query(collection(db, 'users'));
  const result = await getDocs(colRef);
  return result.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

//Send Messages:
export const sendMessage = async (userId, message) => {
  const colRef = query(collection(db, `users/${userId}/messages`));
  await addDoc(colRef, {message});
}
