function doLogin() {
  var username = document.getElementById("Username").value;
  var psw = document.getElementById("Password").value;
  if(username == "" || psw == ""){
      alert("Username e Password obbligatori");
  }
}
else {
  // chiamiamo il server per effettuare la verifica
  fetch("https://www.cacciaapi.altervista.org/login.php/loginIpad", {
    method: 'POST', // o 'GET'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": username,
      "password": psw
    })
  })
  .then(response => response.json()) // converte la risposta in JSON
  .then(data => {
    console.log(data);
    window.location.href = "Game1.html";
  }) // stampa i dati
  .catch((error) => {
    console.error('Errore:', error);
  });
}
