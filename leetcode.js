//1 easy//////////////////////////////////////////
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
}

// const nums = [2, 11, 15, 7];
// const target = 9;
// const nums = [3, 3];
// const target = 6;
// const result = twoSum(nums, target);
// console.log(result);
// Success
// Details
// Runtime: 220 ms, faster than 16.58% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.6 MB, less than 99.80% of JavaScript online submissions for Two Sum.
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const exist = target - nums[i];
    // const index = nums.indexOf(exist);
    if (nums.indexOf(exist) !== -1 && i !== nums.indexOf(exist)) {
      return [i, nums.indexOf(exist)];
    }
  }
}

// const x = [2, 11, 15, 8, 7];
// const x = [3, 3];
// const y = 9;
// const z = twoSum2(x, y);
// console.log(z);
// console.log(x.indexOf(32));
// Runtime: 183 ms, faster than 25.83% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 59.87% of JavaScript online submissions for Two Sum.

// Runtime: 188 ms, faster than 24.09% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.3 MB, less than 80.92% of JavaScript online submissions for Two Sum.
//  for (let i = 0; i < x.length; i++) {
//    const e = y - x[i];
//    if (x.indexOf(e) !== -1 && i !== x.indexOf(e)) {
//      return [i, x.indexOf(e)];
//    }
//  }
//2 medium////////////////////////////////////

// function addArray(l1, l2) {
//   function reverse(arr) {
//     r = "";
//     for (let i = arr.length - 1; i >= 0; i--) {
//       r += arr[i];
//     }
//     return r;
//   }
//   const result = parseInt(reverse(l1)) + parseInt(reverse(l2));
//   reverseResult = reverse(result.toString());
//   let natija = [];
//   for (let i = 0; i < reverseResult.length; i++) {
//     natija.push(parseInt(reverseResult[i]));
//   }
//   return natija;
// }

// function addArray(x, y) {
//   // function re(arr) {
//   //   let r = "";
//   //   for (let i = arr.length - 1; i >= 0; i--) {
//   //     r += arr[i];
//   //   }
//   //   return r;
//   // }
//   let l1 = "";
//   for (let i = x.length - 1; i >= 0; i--) {
//     l1 += x[i];
//   }
//   let l2 = "";
//   for (let i = y.length - 1; i >= 0; i--) {
//     l2 += y[i];
//   }

//   const added = parseInt(l1) + parseInt(l2);
//   const p = added.toString();
//   let l3 = "";
//   for (let i = p.length - 1; i >= 0; i--) {
//     l3 += p[i];
//   }

//   let n = [];
//   for (let i = 0; i < l3.length; i++) {
//     n.push(parseInt(l3[i]));
//   }
//   return n;
// }
var addTwoNumbers = function (l1, l2) {
  const m = l1.reverse();
  const n = l2.reverse();

  let ms = "";
  for (let i = 0; i < m.length; i++) {
    ms += m[i];
  }
  let ns = "";
  for (let i = 0; i < n.length; i++) {
    ns += n[i];
  }
  const t = parseInt(ms);
  const d = parseInt(ns);

  const result = t + d;
  const sres = result.toString();
  let g = [];
  for (let i = 0; i < sres.length; i++) {
    g.push(parseInt(sres[i]));
  }
  const u = g.reverse();
  return u;
};
// const l1 = [2, 4, 3];
// const l2 = [5, 6, 4];
// const l1 = [9, 9, 9, 9, 9, 9, 9];
// const l2 = [9, 9, 9, 9];
// result = [7, 0, 8];
// console.log(addTwoNumbers(l1, l2));

//3 hard////////////////////////////////////
function median(x, y) {
  const q = x.concat(y);

  const f = quickSort(q);

  if (f.length === 1) {
    return f[0];
  }
  if (f.length % 2 !== 0) {
    const t = Math.ceil(f.length / 2) - 1;
    return f[t];
  } else {
    const m = f.length / 2 - 1;
    const r = (f[m] + f[m + 1]) / 2;
    return r;
  }
}
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// const m1 = [3];
// const m2 = [-2, -1];
// console.log(median(m1, m2));

// Runtime: 535 ms, faster than 5% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 116.5 MB, less than 5% of JavaScript online submissions for Median of Two Sorted Arrays.
var findMedianSortedArrays = function (x, y) {
  const q = x.concat(y);

  const f = mergeSort(q);

  if (f.length === 1) {
    return f[0];
  }
  if (f.length % 2 !== 0) {
    const t = Math.ceil(f.length / 2) - 1;
    return f[t];
  } else {
    const m = f.length / 2 - 1;
    const r = (f[m] + f[m + 1]) / 2;
    return r;
  }
};
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
// const jjj = [7, 3, 2, 16, 24, 4, 11];
// const lll = mergeSort(jjj);
// console.log(lll);
// Runtime: 203 ms, faster than 28.50% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 50.8 MB, less than 15.76% of JavaScript online submissions for Median of Two Sorted Arrays.

//4 medium//////////////////////////////////////////
//Given a string s, find the length of the longest substring without repeating characters.
//Input: s = "abcabcbb"
// Output: 3
// Input: s = "bbbbb";
// Output: 1;
// Input: s = "pwwkew";
// Output: 3;
// var start = performance.now();
// console.time("loop");
function lengthOfLongestSubstring(s) {
  // if (s.length === 0) {
  //   return false;
  // }
  const sArr = Array.from(s);
  let subArray = [];
  let sub = "";
  function ddd(sArr) {
    for (let i = 0; i < sArr.length; i++) {
      if (sub.length > 0) {
        for (const x of sub) {
          if (sArr[i] === x) {
            subArray.push(sub);
            sub = "";
            sArr.shift();
            return ddd(sArr);
          }
        }
      }

      sub += sArr[i];
    }
  }
  ddd(sArr);
  subArray.push(sub);
  let numArr = [];
  for (let i = 0; i < subArray.length; i++) {
    numArr.push(subArray[i].length);
  }
  numArr.sort((a, b) => a - b);
  return numArr[numArr.length - 1];
  // const sorted = mergeSort(numArr);
  // return sorted[sorted.length - 1];
}
// console.timeEnd("loop");
// var duration = performance.now() - start;
// console.log(duration);
// console.log(lengthOfLongestSubstring("alqebriavxoo"));

// Runtime: 3665 ms, faster than 5.01% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 66.3 MB, less than 7.33% of JavaScript online submissions for Longest Substring Without Repeating Characters.

// var start = performance.now();
// for (let index = 0; index < 1000; index++) {
//   console.log(index);
// }
// var duration = performance.now() - start;
// console.log(duration);

// console.time("loop");
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
// console.timeEnd("loop");

//5 medium///////////////////////////////////////////////
// Longest Palindromic Substring
function palindromic(s) {
  if (s.length <= 1) return s;
  let prev = "";
  let curr = "";
  for (let i = 0; i < s.length; i++) {
    let j = 1;
    while (s[i - j] === s[i + j]) {
      curr = s.slice(i - j, i + j + 1);
      j++;
    }
    while (s[i] === s[i + j]) {
      curr = s.slice(i, i + j + 1);
      j++;
    }
    curr.length > prev.length ? (prev = curr) : null;
    // if (curr.length > prev.length) {
    //   prev = curr;
    // }
  }
  return prev;
}
// const ppp = "babad";
// const i = 4;
// const j = 3;
// console.log(ppp.slice(i - j, i + j + 1));
// const i = 1;
// const j = 1;
// console.log(ppp.slice(i - j, i + j + 1));
// console.log(palindromic("sabad"));
// console.log(palindromic("sabalopppold"));
// console.log(palindromic("ralimlalmilarokaiakod"));
// console.log(palindromic("cbbd"));
// console.log(palindromic("cccbbbd"));
// console.log(palindromic("d"));

//11 medium/////////////////////////////
var maxArea = function (h) {
  let max = 0;
  let curr = 0;
  for (let i = 0; i < h.length; i++) {
    for (let j = 0; j < h.length; j++) {
      if (h[i] <= h[j] && i !== j) {
        curr = Math.abs(h[i] * (i - j));
        if (max < curr) {
          max = curr;
        }
      }
    }
  }
  return max;
};
// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //49 [1,8,6,2,5,4,8,3,7]
// console.log(maxArea(height));
// console.log(maxArea([1, 1]));
// console.log(maxArea([1, 2]));

//6 medium ZIGZAG///////////////////////////
function zigzag(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let rowArr = []; //'', '', ''
  for (let i = 0; i < numRows; i++) {
    rowArr[i] = "";
  }
  // const l = s.length;
  let j = 0;
  let k = 0;

  function rec() {
    // if (k >= s.length) {
    //   return null;
    // }
    while (j <= numRows - 1) {
      rowArr[j] += s[k];
      j++;
      k++;
      if (k >= s.length) {
        return null;
      }
    }
    j = j - 2;
    while (j > 0) {
      rowArr[j] += s[k];
      j--;
      k++;
      if (k >= s.length) {
        return null;
      }
    }
    return rec();
  }
  rec();

  return rowArr.join("");
}

// const z = zigzag("A", 1);
// const z2 = zigzag("PAYPALISHIRING", 3);
// const z3 = zigzag("AB", 1);
// console.log(z);
// console.log(z2);
// console.log(z3); // "AB"
// Runtime: 105 ms, faster than 79.73% of JavaScript online submissions for Zigzag Conversion.
// Memory Usage: 47.9 MB, less than 44.23% of JavaScript online submissions for Zigzag Conversion.
