/**
 *
 * powiekszanie pierwszego znaku ciagu
 *
 */

(function () {
    console.group('EX4 - powiekszanie pierwszego znaku ciagu');
    let text = "to jest przykladowy string";
    function upper(text){
        /*text.chartAt(0) */
        return text[0].toUpperCase() + text.slice(1);
    }
    console.log(upper(text));
    console.groupEnd('EX4 - powiekszanie pierwszego znaku ciagu')
})();