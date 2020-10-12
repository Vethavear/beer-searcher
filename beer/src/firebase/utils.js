import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './config'


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const handleUserProfile = async ({ userAuth, additionalData }) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {

        const { email } = userAuth;
        const timestamp = new Date();

        try {
            await userRef.set({
                email,
                createdDate: timestamp,
                ...additionalData
            })
        } catch (err) { console.log(err) }
    }
    return userRef;

}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)

        })
    })
}

export const getFavs = () => {
    const { uid } = getCurrentUser();
    firestore.collection('favs').doc(uid).get().then(doc => {
        if (doc.exists) {
            const { favs } = doc.data();
            return favs;
        } else {
            console.log('no such beer in favs')
        }
    })


}

export const addFav = (fav) => {
    const { uid } = getCurrentUser();
    firestore.collection('favs').doc(uid).set({
        favs: fav
    }, {
        merge: true
    })
}

export const deleteFav = (fav) => {
    const { uid } = getCurrentUser();
    const favs = getFavs();
    favs.splice(favs.indexOf(fav), 1);
    firestore.collection('favs').doc(uid).set({ favs: favs })
}