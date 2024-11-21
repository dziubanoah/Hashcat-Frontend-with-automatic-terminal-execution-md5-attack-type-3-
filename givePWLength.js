let submit_Length = document.getElementById("Input_Submit");
let Password_Length = document.getElementById("Passwort");

submit_Length.addEventListener("click", function() {
    window.alert(Password_Length.value);
    var Length = md5(Password_Length.value);
    window.alert(Length);
    fetch("http://localhost:189", {
        method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: Length
    })
    .then(response => response.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});
