// 2535. Difference Between Element Sum and Digit Sum of an Array
// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

let nums = [1, 15, 6, 3];
let numbers = [1, 2, 3, 4];
let digitSum = 0;
let elementSum = 0;

for (let i = 0; i < nums.length; i++) {
  elementSum += nums[i];
}

let arr = nums.join("").split("");

for (let i = 0; i < arr.length; i++) {
  digitSum += +arr[i];
}

let difference = (digitSum, elementSum) => {
  return digitSum > elementSum ? digitSum - elementSum : elementSum - digitSum;
};

return difference(digitSum, elementSum);
