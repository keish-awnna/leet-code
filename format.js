/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  console.log(s);
  const arr = s.split(" ");
  console.log(arr);
  console.log(`-----`);

  const sorter = (a, b) => {
    return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0);
  };
  arr.sort(sorter);

  const removingLastChar = arr.map((string) =>
    string.substring(0, string.length - 1)
  );
  console.log(removingLastChar);
  console.log(`-----`);

  const sortedString = removingLastChar.join(" ");
  console.log(sortedString);
  console.log(`*******`);

  return sortedString;
};

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if ((nums[i] * nums[i + 1]) % k === 0) {
      let x = nums[i] * nums[i + 1];
      console.log(x % k);
      return true;
    } else {
      return false;
    }
  }
}

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % k === 0) {
    let x = nums[i];
    console.log(`found one! ${x}`);
  } else {
    console.log(`nothing here`);
  }
}

for (let i = 0; i < nums.length; i++) {
  if (nums[i] + nums[i + 1] === k || (nums[i] * nums[i + 1]) % k === 0) {
    let x = nums[i];
    console.log(`found one! ${x}`);
  } else {
    console.log(`nothing here`);
  }
}

let answer = new Boolean(true);
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (nums[i] + nums[i + 1] === k || sum % k === 0) {
    let x = nums[i] + nums[i + 1];

    let intFirst = nums[i];
    let intSecond = nums[i + 1];

    console.log(`found a pair: ${intFirst} + ${intSecond} = ${x}`);
  } else {
    console.log(`nothing here`);
  }
}

//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let answer = false;
  let sum = 0;
  console.log(nums);
  let iterations = 0;
  let continueLoop = true;

  for (let i = 0; i < nums.length; i++) {
    if (continueLoop) {
      let nestedAnswer = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        console.log(`iterations: ${iterations++}`);
        nestedAnswer += nums[j];
        console.log(nestedAnswer);
        if (nestedAnswer % k === 0) {
          console.log(`gotcha`);
          //continueLoop = false;
        }
        console.log(`-------`);
      }
    }
    console.log(`----done---`);
  }

  return answer;
};

// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  console.log(prices);
  let maxArr = [];

  for (let i = 0; i < prices.length; i++) {
    // console.log(i);
    // console.log(prices[i]);
    // console.log(prices[i + 1]);

    // console.log(`---iteration---`);

    let minPrice = Math.min(...prices);
    // console.log(min)

    // console.log(`${minPrice} is equal to or less than ${prices[i+1]}`);

    if (minPrice < prices[i + 1]) {
      let highPrice = prices[i + 1];

      // console.log(`${minPrice} is equal to or less than ${highPrice}`);

      maxArr.push(highPrice);
      // console.log(maxArr);

      let maxPrice = Math.max(...maxArr);
      console.log(maxPrice);

      if (minPrice < maxPrice) {
        let answer = maxPrice - minPrice;
        console.log(`maxPrice - minPrice = ${answer}`);
      }
    }
  }
};

// 1528 shuffle string - notes on my first hash table

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  console.log(`this is 's': ${s}`);
  console.log(`this is 'indices': ${indices}`);

  console.log(`----attempt at hash map----`);

  let simplehash = {};
  //  console.log(`this is an object: ${simplehash}`);
  // simplehash[indices[0]] = s[0];
  // simplehash[indices[1]] = s[1];
  // simplehash[indices[2]] = s[2];
  // simplehash[indices[3]] = s[3];
  // simplehash[indices[4]] = s[4];
  // simplehash[indices[5]] = s[5];
  // simplehash[indices[6]] = s[6];
  // simplehash[indices[7]] = s[7];

  for (let index in indices) {
    console.log(`key: ${index}`);
    simplehash[indices[index]] = s[index];
  }

  // // for (let key in simplehash) {

  //     // if(key in simplehash) {
  //     if(simplehash.hasOwnProperty(key)) {
  //         // console.log('key is: ' + key + ', value is: ' + simplehash[key]);
  //         let shuffledString = simplehash[key];
  //         console.log(`this is a shuffled string: ${shuffledString}`);
  //     }
  // }

  //     console.log(`----for in loop----`);
  //     for (index in indices){
  //         console.log(`this is 'index': ${index}`);
  //     }

  // console.log(`----for of loop----`);
  //     for (let index of indices) {
  //         console.log(`this is 'index': ${index}`);

  //     }

  // console.log(`----for loop----`);
  //     for (let i = 0; i < indices.length; i++) {
  //         console.log(`this is 'indices': ${indices}`);
  //     }
};
