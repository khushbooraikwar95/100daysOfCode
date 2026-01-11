// write a function that seraches for an element in an array and returns the index, if the ele is not present then return -1

// function searchElem(arr, val) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
//     return -1;

// }
// let arr = [4, 2, 0, 10, 8, 30]

// let result = searchElem(arr, 30);

// console.log(result)

// write a function that reutrns the negetive numbers in an array

// function countsNegetive(arr1) {
//     let counter = 0
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] < 0) {
//              counter++
//         }
//     }
//     return counter;

// }

// let arr1 = [-1,  90, -12, 5, -7, 8, -9, -2]

// // let result = countsNegetive(arr1)

// console.log(countsNegetive(arr1))

// Write a function that returns the largest number in an array

let arr = [23, 45, 34, 56, 0, 9, -1, -90, 21, -22, 0];

function largestNum(arr) {
  let num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) num = arr[i];
  }
  return num;
}

console.log(largestNum(arr));
