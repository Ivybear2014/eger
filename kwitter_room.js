
var firebaseConfig = {
      apiKey: "AIzaSyAqEc_uBPE8M6CcVtS87_07hB00p-JHfsA",
      authDomain: "eger-13453.firebaseapp.com",
      databaseURL: "https://eger-13453-default-rtdb.firebaseio.com",
      projectId: "eger-13453",
      storageBucket: "eger-13453.appspot.com",
      messagingSenderId: "793824304936",
      appId: "1:793824304936:web:1f3a6fa45e799efff63a1d"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  userName = localStorage.getItem("username")
  document.getElementById("user_name").innerHTML = "welcome " + userName
  function addRoom()
  {
  var roomName = document.getElementById("if").value
  firebase.database().ref("/").child(roomName).update({
  purpose :"val"
  
  })
  localStorage.setItem("roomName", roomName)
window.location = "eger_page.html"

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(Name) 
{
      localStorage.setItem("roomName",Name)
      window.location = "kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("roomName")
      localStorage.removeItem("username")
      window.location = "index.html"
}
