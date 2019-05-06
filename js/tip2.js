/**
 * 
 * generowanie znakow
 * 
 */

console.group('EX2 - generowanie znakow');
 let text = '';
 const mark = "-"

 for (let index = 0; index < 100; index++) {
     text+= mark;
 }

 console.log(1);
 
 console.log(text);
 

 let text2 = (new Array(101)).join(mark);

 console.log(2);
 console.log(text2);

console.groupEnd('EX2 - generowanie znakow')
 
 