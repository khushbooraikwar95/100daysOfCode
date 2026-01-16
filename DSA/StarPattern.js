for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

// output:
// *****
// *****
// *****
// *****

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

// output:
// *
// **
// ***
// ****

for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row);
}
// output:
// 1
// 12
// 123
// 1234
// 12345

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

// output:
// 1
// 22
// 333
// 4444
// 55555
