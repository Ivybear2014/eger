
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

username = localStorage.getItem("username")
room_name = localStorage.getItem("roomName")

function send()
{
      message = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            Name:username, 
            message:message, 
            likes:0
      });
      document.getElementById("msg").value = ""
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

message = message_data["message"]
Name = message_data["Name"]
likes = message_data["likes"]
nameTag = "<h4>"+Name+"<img src='tick.png' class='user_tick'></h4>"
essage = "<h4 class='message_h4'>"+message+"</h4>"
buttonI = "<button class = 'btn btn-info' id = "+firebase_message_id+" value = "+likes+" onclick = 'likesToo(this.id)'>"
buttonToo = "<span class = 'glyphicon glyphicon-thumbs-up'> Like-"+likes+"</span></button><hr>"


row = nameTag + essage + buttonI + buttonToo

document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();


function likesToo(message_id) 
{
      like = document.getElementById(message_id).value
      like_updated = Number(like) + 1
      firebase.database().ref(room_name).child(message_id).update({
            likes:like_updated
      })
}