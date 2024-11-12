let submit = document.getElementById("Input_Submit");
let Passwort = document.getElementById("Input_PW");

submit.addEventListener("click", function(){
    sendInput();
});

        function sendInput() {
        const inputValue = document.getElementById("Passwort").value;

        // Sende den Wert als einfachen Text an den Server
        fetch('http://localhost:187', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: inputValue
        })
        .then(response => response.text())
        .then(data => console.log('Antwort vom Server:', data))
        .catch(error => console.error('Fehler:', error));
    }