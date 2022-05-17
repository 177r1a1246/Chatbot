function talk(){
  var know = {
    "Hi" : "Hello, Developers Community Here.",
    "How are you" : "Good :)",
    "What about you" : "I'm fine :)" ,
    "Ok" : "Thank You So Much",
    "Bye" : "Okay! Will meet soon. TC:).."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
