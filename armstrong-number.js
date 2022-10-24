/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  let myArray = s.split(/[aeiou]/).join("");

  return myArray;
};
