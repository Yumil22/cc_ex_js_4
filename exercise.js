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
    let sum = [];
    for (let a = 0; a < numbers.length; a++) {
        for (let b = a + 1; b < numbers.length; b++) {
            sum.push(numbers[a] + numbers[b]);
        }
    }
    sum.includes(target) ? res = true : res = false;
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;