let submit_encrypt = document.getElementById("Input_Submit");
let Password_encrypt = document.getElementById("Passwort");

submit_encrypt.addEventListener("click", function() {
    //window.alert(Password_encrypt.value + " not encrypted Value from sv188 api");
    var strHash = md5(Password_encrypt.value);
    window.alert(strHash + " encrypted value from sv188 api");
    fetch("http://localhost:188", {
        method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: strHash,
            mode: 'no-cors'
    })
    .then(response2 => response2.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});
