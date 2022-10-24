// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

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
