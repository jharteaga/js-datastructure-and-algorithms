// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*******************************************/
/*              SOLUTION 1                 */
/*******************************************/
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

/*******************************************/
/*              SOLUTION 2                 */
/*******************************************/
// function reverse(str) {
//   const strArr = str.split('');
//   const newArr = [];

//   for (let i = 0; i < strArr.length; i++) {
//     newArr.unshift(strArr[i]);
//   }

//   return newArr.join('');
// }

/*******************************************/
/*              SOLUTION 3                 */
/*******************************************/
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) reversed = char + reversed;

//   return reversed;
// }

/*******************************************/
/*              SOLUTION 4                */
/*******************************************/
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
