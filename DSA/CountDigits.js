// Write a function that returns count of digits in a number
function countDigits(num) {
  let count = 0;
  if (num == 0) return 1;
  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = -887;

console.log(countDigits(num));

//output: 5
