
function doLogin() {
  var username = document.getElementById("Usarname").value;
  var psw = document.getElementById("Password").value;
  if(username == "" || psw == ""){
      alert("Username e Password obbligatori");
  }
}
