import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQBQgMp6qown3AR_cc24d-Vm22vk0Zv1Y",
  authDomain: "vue-blog-f24a0.firebaseapp.com",
  projectId: "vue-blog-f24a0",
  storageBucket: "vue-blog-f24a0.appspot.com",
  messagingSenderId: "501841012320",
  appId: "1:501841012320:web:fa1c8b95b9ed00c8aa0505",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
