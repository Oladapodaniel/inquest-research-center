// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8jPPnwCJEZZfq0wYyRcWyTqywbMOoXbg",
    authDomain: "inquest-research-center-beb35.firebaseapp.com",
    projectId: "inquest-research-center-beb35",
    storageBucket: "inquest-research-center-beb35.appspot.com",
    messagingSenderId: "147552694191",
    appId: "1:147552694191:web:b49f56f0bd882c5e2f495a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// console.log(firebase.auth())

// Initialize Cloud Firestore and get a reference to the service
export default firebaseApp.firestore();