// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMLkt1C6CN8IC0eVSjBM52769AAYaUi8w",
  authDomain: "colegio-ab4cf.firebaseapp.com",
  projectId: "colegio-ab4cf",
  storageBucket: "colegio-ab4cf.appspot.com",
  messagingSenderId: "529415169366",
  appId: "1:529415169366:web:4dfb0ca414d381776f22f7",
  measurementId: "G-N1G611QCXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



let db = firebase.firebase()

// passnaod o nome da coleçao
db.collection("turmaA").get()
    .then((snapshot) => {

        snapshot.forEach((doc) => {
            console.log(doc)
        })

    })