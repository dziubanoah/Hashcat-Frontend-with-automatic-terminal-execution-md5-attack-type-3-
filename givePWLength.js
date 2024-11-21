let submit_Length = document.getElementById("Input_Submit");
let Password_Length = document.getElementById("Passwort");

submit_Length.addEventListener("click", function() {
    var PWLength = Password_Length.length;
    //window.alert(PWLength + " from sv 189 api");
    fetch("http://localhost:189", {
        method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: PWLength
    })
    .then(response3 => response3.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});
