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
