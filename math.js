//4) POWER OF TWO
// function pwr(n) {
//   for (let i = 2; i < n; i = i + 2) {
//     if (n % i === 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(pwr(100));

// function pwr(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }
// console.log(pwr(1));
// console.log(pwr(16));
// console.log(pwr(100));
// console.log(pwr(512));
//////////////////////////////////////////
// 5 RECURSION FIBONACCI
// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }
// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));
//////////////////////////////////////////
// 5 RECURSION FACTORIAL
// function fctr(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * fctr(n - 1);
// }
// console.log(fctr(0));
// RECURSION FIBONACCI
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));