/**
 *
 * przetesowanie tablicy
 *
 */

(function () {
    console.group('EX6 - przetesowanie tablicy');
    const arr = [123, 345, 52, 2, 67, 976, 943, 23, 25];
    for(let i = 1; i <= 10; i++ ){
        arr.sort(function (a, b) {
            let random1 = Math.random(Math.random() * (10 - 1) + 1);
            let random2 = Math.random(Math.random() * (10 - 1) + 1);
            return random1 - random2;
        });
        console.log([i],arr);
    }
    console.groupEnd('EX6 - przetesowanie tablicy')
})();