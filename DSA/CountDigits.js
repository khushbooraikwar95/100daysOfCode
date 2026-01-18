// Write a function that returns count of digits in a number
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = 55634;

console.log(countDigits(num));

//output: 5
