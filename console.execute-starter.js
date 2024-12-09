let hackbtn = document.getElementById('hackbtn');

//schickt den wert start_console an den server :1099
hackbtn.addEventListener("click", function() {
    window.alert("click is true");
    fetch('http://localhost:1099', {
        method: "POST",
        headers: {
            'Content-Type': 'text/html',
        },
        body: "start_console",
        mode: "no-cors"
    })
    .then(response4 => response4.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});