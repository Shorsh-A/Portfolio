// 1)

// function printAll(item) {
//   console.log(arr);
// }
// printAll(arr);

// 2)
// function double(arr) {
//   let doubles = [];
//   for (let item of arr) {
//     doubles.push(item * 2);
//   }
//   return doubles;
// }
// console.log(arr, double(arr));

// 3)

// function hasEven(arr) {
//   for (let item of arr) {
//     let isEven = item % 2 === 0;
//     console.log(true);
//   }
// }
// console.log(hasEven);

// 4)
// let hasEven = arr.some(function(item) {
//   return item % 2 == 0;
// });
// console.log(hasEven);

// 5)

// let allAreEven = arr.every(function(item) {
//   return item % 2 === 0;
// });
// console.log(allAreEven);

// 6)

// let firstEvenNumber = arr.find(function(item) {
//   return item % 2 === 0;
// });
// console.log(firstEvenNumber);

// 7)

// let gianni = [4, 4, 5, 6, 4, 9];

// function newEvenArray(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(newEvenArray(pippo));
// console.log(newEvenArray(gianni));

// let sum = 0;
// function sumAllNumbers(arr) {
//   for (let item of arr) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(sumAllNumbers(arr));

let arr = [3, 2, 5, 6, 4, 9];
const isEven = arr * 2;

function newEvenArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(newEvenArray(arr));

function sumSquareOfEvens(arr) {
  let newArr = [];
  for (let item of arr) {
    newArr.push(item * item);
  }
  return newArr;
}

let onlyEvenNumbers = newEvenArray(arr);
let doubleNumbers = sumSquareOfEvens(onlyEvenNumbers);
console.log(doubleNumbers);
