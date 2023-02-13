// 1431. Kids With the Greatest Number of Candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
  console.log(candies);
  console.log(extraCandies);

  for (let i = 0; i < candies.length; i++) {
    console.log(`Max: ${Math.max(candies[i])}`);

    if (candies[i] + extraCandies > candies[i + 1]) {
      console.log(`greatest:${candies[i] + extraCandies} `);
    }
  }
};

kidsWithCandies(candies, extraCandies);
