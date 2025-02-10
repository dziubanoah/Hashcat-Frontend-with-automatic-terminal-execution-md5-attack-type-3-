let pw = document.getElementById("pw");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    giveValue();
});

function giveValue() {

    let pwData = pw.value
    fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Header für JSON-Daten
        },
        body: JSON.stringify({Passwort: pwData})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
    console.log("DIe Payload ist: " + pwData)
}
