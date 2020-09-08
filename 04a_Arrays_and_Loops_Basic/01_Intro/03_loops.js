/*
 Beispiele 2 - Arrays mit Index oder mit while-Loop ausgeben
*/

//Array definieren
let klassen = ['ME17', 'ME18', 'ME19', 'ME20'];


//Innerhalb des while-loops kann Code geändert werden
let i = 0;
while (i < 4){
    i++;
    console.log(`${i}. Mediamatiker-Klasse ${klassen[i]}`);
}


console.log("\nMit Parallel-Klassen (Ausgabe mit while)");

let klasse;
let bezeichnung;
i = 0;
while (i < 4){
    //UTF-16 Hexadezimal 'a' codiert
    //https://asecuritysite.com/coding/asc2
    klasse = klassen[i]
    bezeichnung = 0x61;
    let j = 0;
    while (j < 4){
        console.log(`Mediamatiker-Klasse ${klasse}${String.fromCharCode(bezeichnung++)}`);
        j++;
    }
    i++;
}

//weitere Loop-Varianten gibt es mit do..while, foreach
