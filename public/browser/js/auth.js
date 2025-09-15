(async function() {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgH2hu57dfoeKoz-1DxQ9mb-QTj3-EvqI",
    authDomain: "axiom-3f901.firebaseapp.com",
    projectId: "axiom-3f901",
    storageBucket: "axiom-3f901.firebasestorage.app",
    messagingSenderId: "993009769648",
    appId: "1:993009769648:web:7c8f4dfdb9a9499074af75",
    measurementId: "G-EP8214CHBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let previousUser = null;

// Auth state listener
onAuthStateChanged(auth, async (user) => {
    if (user) {
        if (previousUser === null && window.loadLocalStorageFromFirebase) {
            await window.loadLocalStorageFromFirebase(user.uid);
        }
        if (window.startSync) {
            window.startSync(user.uid);
        }
        localStorage.setItem('axiomPremium', 'true');
        const loginButton = document.getElementById('login-sidebar-button');
        if (loginButton) {
            loginButton.style.backgroundColor = 'var(--theme-accent)';
        }
    } else {
        localStorage.setItem('axiomPremium', 'false');
        const loginButton = document.getElementById('login-sidebar-button');
        if (loginButton) {
            loginButton.style.backgroundColor = 'transparent';
        }
    }
    previousUser = user;
});

// Expose auth functions globally
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.onAuthStateChanged = onAuthStateChanged;
`;
    document.head.appendChild(script);
})();