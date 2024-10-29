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

    const neededNumbers = new Set(); // Conjunto para almacenar los números necesarios para alcanzar el target
    
    for (const num of numbers) {
        const difference = target - num;
        
        // Si el número actual está en el conjunto econtramos un par válido
        if (neededNumbers.has(num)) {
            res = true;
            break;
        }
        
        // Agregar la diferencia al conjunto como el valor necesario para completar el target
        neededNumbers.add(difference);
    }
    
    /* Only make changes below this comment */

    return res;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.pairTheSum = pairTheSum;