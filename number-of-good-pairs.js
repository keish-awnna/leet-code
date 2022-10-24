/**
 * @param {number[]} nums
 * @return {number}
//  1512. Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

*/
var numIdenticalPairs = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        counter++;
      }
    }
  }
  return counter;
};
