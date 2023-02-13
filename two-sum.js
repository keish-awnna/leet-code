// TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15];
let target = 9;

// let nums = [3, 3];
// let target = 6;

const twoSum = (nums, target) => {
  let output = [];

  console.log(`nums: ${nums}`);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        console.log(
          i,
          nums[i] + nums[j],
          `index of i: ${nums.indexOf(nums[i])}`
        );
        // output.push(nums.indexOf(nums[i]));
        output.push(i);
      }
    }
  }

  console.log(`output: ${output}`);
  return output;
};

twoSum(nums, target);
