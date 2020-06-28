// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//SOLUTION 1
// function anagrams(stringA, stringB) {
//   const strA = stringA.replace(/[^\w]/g).toLowerCase();
//   const strB = stringB.replace(/[^\w]/g).toLowerCase();

//   if (strA.length !== strB.length) return false;

//   const objA = {};
//   for (let char of strA) objA[char] = objA[char] + 1 || 1;

//   const objB = {};
//   for (let char of strB) objB[char] = objB[char] + 1 || 1;

//   for (let char in objA) {
//     if (objA[char] !== objB[char]) return false;
//   }

//   return true;
// }

// Solution 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
