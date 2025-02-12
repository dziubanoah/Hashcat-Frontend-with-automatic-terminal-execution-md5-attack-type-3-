let pw = document.getElementById("pw");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    giveValue();
});

function giveValue() {

    let pwData = pw.value;
    let pwData_md5 = CryptoJS.MD5(pwData).toString();
    console.log(pwData_md5)
    fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-Type": "text/plaine",  // Header für JSON-Daten
        },
        body: pwData_md5
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ", error));
    console.log("DIe Payload ist: " + pwData)
}
