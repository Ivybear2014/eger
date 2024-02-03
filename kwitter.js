function log() 
{
    user_name = document.getElementById("text").value
    localStorage.setItem("username", user_name)
    window.location = "kwitter_room.html"
}