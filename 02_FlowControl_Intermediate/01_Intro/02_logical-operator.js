/*
Thema: if-then-else mit logischen (boolschen) Operatoren
 */
/*
Beispiel 1 - Wetterberater
 */

let temp = 30;

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Opeartor - True if at least one side is true. False otherwise

if (10 <= temp && temp <= 20) {
    console.log('Das Wetter ist kühl!');
}
else if (20 <= temp && temp <= 30) {
    console.log('Das Wetter ist angenehm warm!');
} else if (temp <= 0 || temp >= 40) {
    console.log('Bleib zuhause. Es ist super kalt oder sehr heiss!');
} else {
    console.log('Keine Empfehlung vorhanden. Musst selber programmieren!');
}



/*
Beispiel 2 - Eintrittspreis ermitteln
*/

//Argumente auslesen (parsen)
let args = process.argv.slice(2);
console.log("Argumente: ", args);
let age = args[0];
let isStudent = args[1];

// If 6 or under print message about child pricing
if (age < 6) {
    console.log(`With ${age}: Free entrance!`);
}
else if ((6 <= age) && (age < 16)) {
    console.log(`With ${age}: You will get a child discount!`);
}
// If 65 or older or stundent print message about senior discount
else if (age >= 65 || isStudent) {
    console.log(`With ${age}: You will get a 50% discount!`);
} else {
    console.log(`With ${age}: NO discount!`);
}


