// 1678. Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// /**
//  * @param {string} command
//  * @return {string}
//  */

// let command = "G()(al)";
// let command = "G()()()()(al)";
let command = "(al)G(al)()()G";

const interpret = (command) => {
  const interpretation = command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
  return interpretation;
};

interpret(command);
