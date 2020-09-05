/*
Thema: Arrays und deren built-in Methoden
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */

/*
 Beispiele 1 - Arrays mit verschiedenen Datentypen

 Weitere Beispiele finden Sie hier:
 https://www.w3schools.com/jsref/jsref_obj_array.asp
 */

/*
let stringArray = [ 'John', 'Bob', 'Mary'];
//alle Elemente
console.log(stringArray);
//erstes Element
console.log(stringArray[0]);
//letztes Element
console.log(`array length is ${stringArray.length}`);
let lastElement = stringArray.length-1;
console.log(`last element is ${stringArray[lastElement]}`);

let numberArray = [ 0,1,2,3,4 ];
console.log(numberArray);
//Challenge: geben Sie das erste und das letzte Array-Element aus

let boolArray = [ true,false ];
console.log(boolArray);

let tictactoe = [
    ['o','x','x'],
    ['o','o','x'],
    ['x','o','x'],
];
console.log(tictactoe);
console.log(tictactoe[0][0]);
console.log(tictactoe[1][2]);

//Alternative Schreibweise
let arr = new Array('red','orange','green');
console.log(arr);
*/


/*
 Beispiele 2 - Wichtigsten Array-Methoden.
 Methoden (ähnlich wie Funktionen) verarbeiten die Array-Daten
 */

let todoList = ['Waschen', 'Einkaufen'];

//Liste füllen
todoList[2] = "Rechnung 1 zahlen";
todoList[3] = "Rechnung 2 zahlen";
todoList.push('Herbst-Ferien: Hotel buchen');
todoList.push('Herbst-Ferien: Flug buchen');
todoList.push('M288-LB02 planen');
todoList.push('M288-LB02 Projekt 1 programmieren');

//Todos erledigen resp. die Liste abbauen

//letztes Element löschen
todoList.pop();
console.log('letztes Element gelöscht mit pop:');
console.log(todoList);

//erstes Element löschen
todoList.shift();
console.log(todoList);

//Element an erster stelle setzen
todoList.unshift('Mahnung 1 zahlen');
console.log(todoList);

//Index des Eintrags ermitteln
const todoXY = 'Rechnung 2 zahlen';
console.log(`Index von "${todoXY}" ist ${todoList.indexOf(todoXY)}`);




















