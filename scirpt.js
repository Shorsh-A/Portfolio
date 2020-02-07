
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

  /* for (let n = 2; n < 10; n++) {
    let isPrime = true;
    
    for (let m = 2; m < n-1 && isPrime; m++){
        if (n % m == 0) {
            isPrime = false;
        }
    }
        if (isPrime)
        alert (n)
} 


// Odd Numbers between 1 - 10

 for (let n = 2; n < 10 ; n++){
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





