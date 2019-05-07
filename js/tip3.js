/**
 *
 * odwracanie stringow
 *
 */

(function(){
    console.group('EX3 - odwracanie stringow');
    
    let text = "to jest przykladowy string";

    let reverse_text = '';

    for (let i = text.length-1; i >= 0; i--) {
        // console.log(text[i]);
        reverse_text += text[i];
    }
    console.log(1);
    console.log(reverse_text);

    console.log(2);
    console.log(text.split('').reverse().join(''));

    console.groupEnd('EX3 - odwracanie stringow')
})()