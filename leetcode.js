//1/////////////////////////////////////////////////
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
//2////////////////////////////////////

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
const l1 = [9, 9, 9, 9, 9, 9, 9];
const l2 = [9, 9, 9, 9];
result = [7, 0, 8];
console.log(addTwoNumbers(l1, l2));
