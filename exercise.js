/* *Instructions* 

    You will receive two arguments, the first one will be an array with a series of numbers and the second will be just a number
    this number will be called the target as you need to form that target number with the integers provided by the array.

    In summary you need to return true if the target number can be formed by the integers or false if it is impossible 
    taking into account that you cannot repeat integers.

    Good luck!

*/



/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
    /* Only make changes below this comment */
    const num_processed = [];

    for (let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        if(num_processed.includes(target - num)){
            return true;
        }

        num_processed.push(num);
    }

    /* Only make changes below this comment */
    return false;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;