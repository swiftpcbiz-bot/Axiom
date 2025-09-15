import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const db = getFirestore();

export async function saveLocalStorageToFirebase(uid) {
    try {
        const localStorageData = {};
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                localStorageData[key] = localStorage.getItem(key);
            }
        }
        await setDoc(doc(db, 'users', uid), { localStorage: localStorageData }, { merge: true });
        console.log('LocalStorage saved to Firebase');
    } catch (error) {
        console.error('Error saving localStorage:', error);
    }
}

export async function loadLocalStorageFromFirebase(uid) {
    try {
        const docSnap = await getDoc(doc(db, 'users', uid));
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.localStorage) {
                for (let key in data.localStorage) {
                    localStorage.setItem(key, data.localStorage[key]);
                }
                console.log('LocalStorage loaded from Firebase');
            }
        }
    } catch (error) {
        console.error('Error loading localStorage:', error);
    }
}

let syncInterval = null;

export function startSync(uid) {
    if (syncInterval) {
        clearInterval(syncInterval);
    }

    syncInterval = setInterval(() => {
        if (uid) {
            saveLocalStorageToFirebase(uid);
        }
    }, 60000); // Save every minute

    return syncInterval;
}

export function stopSync() {
    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }
}