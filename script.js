//const myAddress = 'Via Pesa del Lino, 17\n20900 Monza (MB)\nItaly'

// const street = 'Via Pesa del Lino,'
// const civicNumber = '17'
// const zipCode = '20900'
// const city = 'Monza'
// const province = '(MB)'
// const country = 'Italy'
// const newLine = '\n'
// const space = ' '
// const address = street + civicNumber + newLine + zipCode + space + city + newLine + province + newLine + country

// console.log(address)

// const newAddress = `${street} ${civicNumber} ${zipCode} ${city} ${province} ${country}`

// console.log(newAddress)

// const workExp = "Intercos.SpA , Procura di Monza , SPPC , CementRezin"
// const education = "Associate Digree of Civil Engineering , Terza media (Italy)"
// const language = "Kurdish(mother language) , Persian(bilingua) , Italian , English , Norwegian"
// const softSkill = "Punctual , Hard worker , proactive , Team player"

//  let cv = `
//  EDUCATION: ${education}

//  WORK_EXPERIENCE: ${workExp}

//  LANGUAGE: ${language}

//  SOFT SKILL: ${softSkill}
// `

// /*let g = prompt ("Guess a number", '');
// let r = (Math.floor(Math.random() * 10));

// if (g == r) {
//     alert ("great!");
// }

// else {
//     alert(g + " was wrong, "  +  "I thought about " + r);
// }

// let start = prompt ("Think about a number and add it the next number after that:", '');
// prompt (" Add 9 to the result", '');
// prompt ("Divide the result to 2:", '')
// prompt ("Now subtract the number that had you thought from this number:", '')
// alert('Your answer is always 5!!  ;)') */

// let i = 0;
// while (i < 3) {
//     alert (i);
//     ++i;
// }

//  let i = 3;
// while (i > 3) {
//     alert (i);
//     --i;
// }

// let count = 0;
// let str = "";
// while (count < 16) {
//        str += "Na ";
//        count++;
// }
// str += "Batman!";
// alert(str);

// let x = -2;
// let y = 0;
// let z = 4;
// if (z > y && z > x && y > x) {
// alert (z + "," + y + "," + x);
// }
//

// let i = prompt ("Inter a number");
//     while (i && i <= 100) {
//         i = prompt("Wrong, try again");
//     }
//     alert ('cool!')

// for (let n = 2 ; n < 10; n++){
//     let isprime = true;

//     for (let m = 2; m < n - 1 && isprime; m++)
//     {
//         if (n % m == 0){
//             isprime = false;
//         }
//     }

//     if(isprime)
//         console.log (n);
// }

//  for (let n = 2; n < 10; n++) {
//      let isPrime = true;

//      for (let m = 2; m < n-1 && isPrime; m++){
//          if (n % m == 0) {
//              isPrime = false;
//          }
//      }
//      if (isPrime)     alert (n)
//  }

// Prime Numbers between 1 - 10

/*  
for (let n = 2; n < 10; n++) {
    let isPrime = true;
    
    for (let m = 2; m < n-1 && isPrime; m++){
        if (n % m == 0) {
            isPrime = false;
        }
    }
        if (isPrime)
        alert (n)
} */

// Odd Numbers between 1 - 10

/*  for (let n = 2; n < 10 ; n++){
     if (n % 2 == 0)
     alert(n)
 }


// Even Numbers between 1 - 10

 for (let n = 1; n < 10; n++){
     let oddNr = true;

     if (n % 2 !== 0)
     alert (n)
 } */

// ********
// ********
// ********

/*
let x = 10;
let y = 20;
let z = 30;

let str = '';
let str2 = '';
let str3 = '';
let space = "  "



for (let x = 0; x <= 10; x++){
    str += x + space;
}


for (let y = 0; y <= 20; y++){
    if (y % 2 == 0) {
        str2 += y + space;
    }
} 

for (let z = 0; z <= 30; z++){
    if (z % 3 == 0) {
        str3 += z + space;
    }
}

alert (`${str} \n ${str2} \n ${str3}`) */

/*

excersize:
      *
    * * *
  * * * * *
* * * * * * *

const ROWS = 10;
let space = " "
let block = "* "
let str = '';

// str += space + space + space + space + space + space + block + '\n'; // 0: 6 spaces, 1 block
// str += space + space + space + space + block + block + block + '\n'; // 1: 4 spaces, 3 blocks
// str += space + space + block + block + block + block + block + '\n'; // 2: 2 spaces, 5 blocks
// str += block + block + block + block + block + block + block + '\n'; // 3: 0 spaces, 7 blocks


for (let i = 0; i < ROWS; i++) {
    let spacesNumber = (ROWS - 1 - i) * 2;
    for (let j = 0; j < spacesNumber; j++) {
        str += space;
    }
    
    let blocksNumber = i * 2 + 1;
    for (let j = 0; j < blocksNumber; j++) {
        str += block;
    }

    str += '\n';
}

console.log(str); 
*/

/*
let card = 'A'
let points 


switch (card) {
    case 'A':
        points = 1
        break;
    case 'J':
        points = 11
        break;
    case 'Q':
        points = 12
        break;
    case 'K':
        points = 13
        break;
    default:
        points = Number(card)
       
} alert('card =' + card + ' ' + points); */

// function printHello () {
//     let who = 'World'
//     alert (`Hello ${who}`);
// }
// printHello ();

// let userName = 'Luca';
// function showMessage () {
//     let message = 'Hello ,' + userName;
//     alert (message);
// }

// showMessage ();

// function showMessage(from, text = "Hello World!") {
//     alert( from + ": " + text );
//   }

//   showMessage("Shorsh", "");
//   alert (text);

// function complete (cognome , nome = '') {
//     a = cognome + ' ' + nome
//     return a;
//     }
//    c = complete ('boukani', 'shorh');
//     alert (c);

/*
// 1. how to build one row?
// 2. how to repeat the process?

function buildRow(columns) {
  let row = '';
  for (let i = 0; i < columns; i++) {
    row += '*';
  }
  return row;
}

function buildButton(rows, columns) {
  let button = '';
  for (let i = 0; i < rows; i++) {
    button += buildRow(columns) + '\n';
  }
  return button;
}

// let row = buildRow(5);
// console.log(row);

let button = buildButton(3, 5);
console.log(button);
*/

/*
11 Feb 2020

Excersize 1:
******
*    *
*    *
******
*/

// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty'

// let rows = 4;
// let columns = 7;
// let i;

// function buildRow(columns) {
//   let row = '';

//   for (i = 0; i < columns; i++) {
//     row += '*';
//   }
//   return row;
// }

// function buildRowWithSpace(columns) {
//   let row = '';

//   for (i = 0; i < columns; i++) {
//     if (i === 0 || i === columns - 1) {
//       row += '*';
//     } else {
//       row += ' ';
//     }
//   }
//   return row;
// }

// function buildButton(rows, columns) {
//   let button = '';

//   for (let i = 0; i < rows; i++) {
//     if (i === 0 || i === rows - 1) {
//       button += buildRow(columns) + '\n';
//     } else {
//       button += buildRowWithSpace(columns) + '\n';
//     }
//   }
//   return button;
// }
// let button = buildButton(4, 7);
// console.log(button);

/* 
Excersize 2:

context: Devil May Cry
Stylish Rankings

1 = Dull!
5 = Cool!
10 = Bravo!
15 = Awesome!
20 = Stylish!

Create a function that , given the amout of damage you inflict to enemies, 
will return the related stylish ranking string.

Hint: Use the switch statment.
*/

// let amount = 1;
// function getStylishRanking(amount){
// let ranking
// switch (amount) {
//     case '1':
//         ranking = 'Dull!';
//         break;
//     case '5':
//         ranking = 'Cool!';
//         break;
//     case '10':
//         ranking = 'Bravo!';
//         break;
//     case '15':
//         ranking = 'Awesome!';
//         break;
//     case '20':
//         ranking = 'Stylish!';
//         break;

//     default:
//         alert(':(')
//         break;
//     }
//

let user = {
  name,
  age: 30
};
console.log(user);
