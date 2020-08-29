/*
Thema: Arrow function
Das ist nicht anderes als eine andere, kompaktere
Schreibweise für Funktionen in JavaScript (und auch in anderen Programmiersprachen).
*/

/*
Beispiel 1 - Arrow-Funktion mit Objekten als Parameter
 */


//Objekt 1
let book1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//Objekt 2
let book2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//Arrow-Funktion liefert als Resultat wieder ein Objekt zurück
let getSummary = (book) => {
    return {
        summary: `Das Buch \"${book.title}\" ist vom Autor ${book.author}`,
        pageCount: `Das Buch \"${book.title}\" hat ${book.pageCount} Seiten.`
    }
}



//Aufruf und Ausgabe
let obj1 = getSummary(book1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(book2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);


/*
Was ist nun der Vorteil Arrow-Funktionen?
1. Einerseits kompakte Schreibweise
2. Es lassen sich Built-in Methoden auf Objekte und Arrays elegant anwenden.
Beispiel unten ist mit dem Array personen:
 */

const personen = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]


let filter1 =
    personen.filter((person) =>
        person.age < 30
);
console.log(filter1);

filter1 =
    personen.find((person) =>
        person.age === 22
);
console.log(filter1);

//Zur Erinnerung: mit function kann es auch geschrieben werden
filter1 =
    personen.find(function(person) {
        return person.age === 22;
    }
);
console.log(filter1);

/* Beispiel zum Filtern mit Regular Expression finden Sie z.B. hier
https://stackoverflow.com/questions/54693939/wildcard-filter-array-of-objects-javascript
 */
