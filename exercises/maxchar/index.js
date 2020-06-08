// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counts = {};
  let max = '';
  let maxCount = 0;

  for (let char of str) counts[char] = counts[char] + 1 || 1;

  for (let char in counts)
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      max = char;
    }

  return max;
}

module.exports = maxChar;
