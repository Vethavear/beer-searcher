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
    return new Promise((resolve, reject) => {
        getCurrentUser().then(user => {
            firestore.collection('favs').doc(user.uid).get().then(doc => {
                if (doc.exists) {
                    const { favs } = doc.data();
                    return favs;
                } else {
                    return []
                }
            }).then(favs => {
                console.log(favs);
                resolve(favs)
            })
        }
        ).catch(err =>{
            console.log(err);
            reject('user logged out')
        })
    })
}

export const addFav = (fav) => {
    getCurrentUser().then(user => {
        firestore.collection('favs').doc(user.uid).set({
            favs: firebase.firestore.FieldValue.arrayUnion(fav)
        }, { merge: true }).then(console.log('added'))
    });

}

export const deleteFav = (fav) => {
    getCurrentUser().then(user => {
        firestore.collection('favs').doc(user.uid).set({
            favs: firebase.firestore.FieldValue.arrayRemove(fav)
        }, { merge: true }).then(console.log('usunieto')).catch(err => console.log(err))
    })
}