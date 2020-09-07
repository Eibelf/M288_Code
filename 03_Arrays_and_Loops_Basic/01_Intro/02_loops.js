/*
Thema: Loops (Schleifen) mit Arrays
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */

/*
 Beispiele 1 - Arrays mit Index oder mit for-Loop ausgeben
 */

//Array definieren
let klassen = ['ME17', 'ME18', 'ME19', 'ME20'];

//Arrays mit Index ausgeben
console.log(klassen[0]);
console.log(klassen[1]);
console.log(klassen[2]);
console.log(klassen[3]);

//Gleiches Arrays mit for-Loop ausgeben
for(let i = 0; i < 4; i++) {
    console.log(klassen[i]);
}

//Ausgabe über die Console - Warum ein Loop-Code?
console.log(klassen);


//Innerhalb des for-loops kann Code geändert werden
for(let i = 0; i < 4; i++) {
    console.log(`Mediamatiker-Klasse ${klassen[i]}`);
    //console.log(`${i}. Mediamatiker-Klasse ${klassen[i]}`);
}

console.log("\nMit Parallel-Klassen (Ausgabe mit for)");
let klasse;
let bezeichnung;

for(let i = 0; i < 4; i++) {
    //UTF-16 Hexadezimal 'a' codiert
    //https://asecuritysite.com/coding/asc2
    klasse = klassen[i]
    bezeichnung = 0x61;
    for(let i = 0; i < 4; i++) {
        console.log(`Mediamatiker-Klasse ${klasse}${String.fromCharCode(bezeichnung++)}`);
    }
}































