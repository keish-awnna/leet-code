/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  console.log(s);
  const arr = s.split(" ");
  console.log(arr);
  console.log(`-----`);

  const sorter = (a, b) => {
    return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
  };
  arr.sort(sorter);

  const removingLastChar = arr.map((string) =>
    string.substring(0, string.length - 1)
  );
  console.log(removingLastChar);
  console.log(`-----`);

  const sortedString = removingLastChar.join(" ");
  console.log(sortedString);
  console.log(`*******`);

  return sortedString;
};
