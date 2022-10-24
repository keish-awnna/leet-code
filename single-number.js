// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  let answer = null;

  // making the hash table
  for (let num of nums) {
    if (num in obj) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  // inspect hash table
  for (let key in obj) {
    if (obj[key] === 1) {
      answer = key;
    }
  }
  return answer;

  // for(let i = 0; i < nums.length; i++){
  //     if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1]) {
  //        console.log(nums[i])
  //         return nums[i]
  //     }
  //     // return nums[i]
  // }
};
