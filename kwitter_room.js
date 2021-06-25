
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCoy6x2JqqkATjlqIJq65_U5hPU4uMYFKk",
      authDomain: "class-93-f61d1.firebaseapp.com",
      databaseURL: "https://class-93-f61d1-default-rtdb.firebaseio.com",
      projectId: "class-93-f61d1",
      storageBucket: "class-93-f61d1.appspot.com",
      messagingSenderId: "632464576784",
      appId: "1:632464576784:web:a2a8ba14b4090adbd51595"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!"; 

function addRoom() {
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
     purpose: "adding room name"      
      });
      localStorage.setItem("room_name", Room_name);
      window.location= "kwitter_page.html";
}

    

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names); 
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row; }); 
      }); }
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
