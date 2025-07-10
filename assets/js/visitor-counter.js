document.addEventListener('DOMContentLoaded', function () {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBGRP-905tsppx0Dq3cPWkdjxRC3dmxcc4",
    authDomain: "rctvijayawada-25.firebaseapp.com",
    databaseURL: "https://rctvijayawada-25-default-rtdb.firebaseio.com",
    projectId: "rctvijayawada-25",
    storageBucket: "rctvijayawada-25.firebasestorage.app",
    messagingSenderId: "281807851432",
    appId: "1:281807851432:web:73234620c5d5d7ac43179d",
    measurementId: "G-LRSVGDVFYY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Visit counter logic
  const counterRef = db.ref('visits');
  counterRef.transaction(current => (current || 0) + 1)
    .then(result => {
      const el = document.getElementById('visitor-count');
      if (el) {
        el.textContent = result.snapshot.val().toLocaleString('en-IN');
      }
    })
    .catch(error => {
      console.error('Visitor count update failed:', error);
    });
});
