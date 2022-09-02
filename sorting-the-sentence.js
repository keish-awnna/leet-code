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
