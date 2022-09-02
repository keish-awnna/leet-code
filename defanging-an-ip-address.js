/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let answer = "";

  for (let i = 0; i < address.length; i++) {
    answer += address[i].replace(".", "[.]");
  }

  return answer;
};
