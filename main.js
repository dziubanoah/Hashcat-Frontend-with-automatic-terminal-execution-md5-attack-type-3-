let submit = document.getElementById("Input_Submit");
let Passwort = document.getElementById("Input_PW");
let Info = document.getElementById("Info");
let Info_Div = document.getElementById("Info_Div");

submit.addEventListener("click", function(){
    sendInput();
    window.open("Showoutput.html");
});

        function sendInput() {
        const inputValue = document.getElementById("Passwort").value;
        window.alert(inputValue);
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
    
Info.addEventListener("mouseover", function() {
    Info_Div.style.display = "block";
});

Info.addEventListener("mouseout", function() {
    Info_Div.style.display = "none";
});