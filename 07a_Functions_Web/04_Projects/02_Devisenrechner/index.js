    /* hallo-Meldung mit Parameter und Rückgabewert */
    function halloText(klasse) {
        let msg = "Hallo lieber Mediamatiker der Klasse "+klasse;
        document.getElementById("out").innerText = msg;
        return msg;
    }
    /* gibt eine Meldung auf dem Bildschrim aus durch Aufruf der hallo-Funktion */
    function hallo() {
        let eingabe = document.getElementById('eingabe').value;
        let msg = halloText(eingabe);
        console.log("Log: " + msg);
    }