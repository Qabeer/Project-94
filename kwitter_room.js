const firebaseConfig = {
      apiKey: "AIzaSyDy5bZ6tT2f4Olt5RF8hDJ48arhYPfYrn0",
      authDomain: "kwitter-project-ee10f.firebaseapp.com",
      projectId: "kwitter-project-ee10f",
      storageBucket: "kwitter-project-ee10f.appspot.com",
      messagingSenderId: "643301369563",
      appId: "1:643301369563:web:a0ce6ed36ddcb4c5ad8efe"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
