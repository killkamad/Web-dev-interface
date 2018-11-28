import firebase from "firebase";

  // Initialize Firebase
  
  const config = {
    apiKey: "AIzaSyAdsywwGwVBy1vdt1ke_x5AswjRVg2t9AI",
    authDomain: "chatapp-65f2a.firebaseapp.com",
    databaseURL: "https://chatapp-65f2a.firebaseio.com",
    projectId: "chatapp-65f2a",
    storageBucket: "chatapp-65f2a.appspot.com",
    messagingSenderId: "356337140193"
  };
  
  firebase.initializeApp(config);
  export default firebase;
