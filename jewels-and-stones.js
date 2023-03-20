/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let jewels = "aA";
let stones = "aAAbbbb";

const numJewelsInStones = (jewels, stones) => {
  let output = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        output++;
      }
    }
  }

  return output;
};

numJewelsInStones(jewels, stones);
