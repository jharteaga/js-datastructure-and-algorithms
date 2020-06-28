// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capitalized = [];
  const arr = str.split(' ');

  for (let word of arr) {
    capitalized.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  return capitalized.join(' ');
}

module.exports = capitalize;
