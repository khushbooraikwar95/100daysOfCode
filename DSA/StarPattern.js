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
for (let i = 0; i < n; i--) {
  let row = "";
  //   for (let j = 0; j <= i; j++) {
  //     row = row + (i + 1);
  //   }
  console.log(row);
}

// output:
// 1
// 22
// 333
// 4444
// 55555

for (let i = 0; i < n; i++) {
  let row = "-";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

//output
// 12345
// 1234
// 123
// 12
// 1

for (let i = 0; i < n; i++) {
  let row = " ";

  //this is adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + "-";
  }
  //adding stars
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
//output
//     *
//    **
//   ***
//  ****
// *****


for(let i=0; i<5; i++){
    let row="";
    let switch = 1;

    for(let j=0; j<=i;j++){

    }
}

//toggle in the pattern
  let toggle = 1

for (let i = 0; i < n; i++) {
  let row = " "
  for (let j = 0; j <=i; j++) {
    row = row + toggle

    //switch the toggle
    if (toggle == 1) {
      toggle = 0
    } else {
      toggle = 1
    }
  }
  console.log(row)

}

//output
// 1
// 10
// 101
// 1010
// 10101