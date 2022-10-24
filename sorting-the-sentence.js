// 1859. Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const arr = s.split(" ");

  const sorter = (a, b) => {
    return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
  };
  arr.sort(sorter);

  const removingLastChar = arr.map((string) =>
    string.substring(0, string.length - 1)
  );

  const sortedString = removingLastChar.join(" ");

  return sortedString;
};
