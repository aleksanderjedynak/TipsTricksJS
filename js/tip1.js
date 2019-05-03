/**
 * 
 * konwersja na wartosc prawdziwa lub falszywa
 */
console.group('EX1 - konwersja na wartosc prawdziwa lub falszywa');

let test = "";
let bool = Boolean(test);
console.log('test', test);
console.log('bool', bool);

if (bool === false) {
    console.log('dziala dobrze');
} else {
    console.log('nieprawidłowo');
}

if (test === false) {
    console.log('dziala dobrze');
} else{
    console.log('nieprawidłowo');
}

if (!!test === false) {
    /* tutaj dynamicznie konwertujemy*/
    console.log('dziala dobrze');
} else {
    console.log('nieprawidłowo');
}

console.groupEnd('EX1 - konwersja na wartosc prawdziwa lub falszywa')