// 1678. Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// /**
//  * @param {string} command
//  * @return {string}
//  */

let command = "G()(al)";

var interpret = function (command) {
  //   console.log(`command: ${command}`);

  let interpretation = "";

  for (let i = 0; i < command.length; i++) {
    // console.log(`command: ${command[i]}`);

    if (command[i] === "G") {
      interpretation = "G";
      console.log(`interpret: ${interpretation}`);
    }
  }
};

interpret(command);
