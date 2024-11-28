let hackbtn = document.getElementById('hackbtn');
let console_start_value = "Hacker";

hackbtn.addEventListener("click", function() {
    window.alert("click is true");
    fetch('http://localhost:1099', {
        method: "POST",
        headers: {
            'Content-Type': 'text/html',
        },
        body: console_start_value
    })
    .then(response4 => response4.text())
    .then(data => console.log('Antwort vom Server:', data))
    .catch(error => console.error('Fehler:', error));
});