/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
    let res = false;
    /* Only make changes below this comment */
    const JuntarNumeros = new Set();
    /* Para cada numero de los numeros.. */
    for (let number of numbers) {
        const Completemento = target - number;
        if (NumerosUtilizados.has(Completemento)) {
            return true;
        }
        NumerosUtilizados.add(number);
    }
    return false;
    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;