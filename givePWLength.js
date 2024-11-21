let submit_Length = document.getElementById("Input_Submit");

submit_Length.addEventListener("click", function() {
    let Password_Length = document.getElementById("Passwort").value;
    console.log(Password_Length.length + " from sv 189 api");
    fetch("http://localhost:189", {
        method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: Password_Length.length.toString()
    })
    .then(response3 => response3.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});
