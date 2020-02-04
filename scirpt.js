
//const myAddress = 'Via Pesa del Lino, 17\n20900 Monza (MB)\nItaly'

const street = 'Via Pesa del Lino,'
const civicNumber = '17'
const zipCode = '20900'
const city = 'Monza'
const province = '(MB)'
const country = 'Italy'
const newLine = '\n'
const space = ' '
const address = street + civicNumber + newLine + zipCode + space + city + newLine + province + newLine + country

console.log(address)


const newAddress = `${street} ${civicNumber} ${zipCode} ${city} ${province} ${country}`

console.log(newAddress)

const workExp = "Intercos.SpA , Procura di Monza , SPPC , CementRezin"
const education = "Associate Digree of Civil Engineering , Terza media (Italy)"
const language = "Kurdish(mother language) , Persian(bilingua) , Italian , English , Norwegian"
const softSkill = "Punctual , Hard worker , proactive , Team player"

 let cv = `
 EDUCATION: ${education} 
 
 WORK_EXPERIENCE: ${workExp}
 
 LANGUAGE: ${language} 
 
 SOFT SKILL: ${softSkill}
`


 let g = prompt ("Guess a number", '');
let r = (Math.floor(Math.random() * 10));


if (g == r) {
    alert ("great!");
}

else {
    alert(g + " was wrong, "  +  "I thought about " + r);
} 




let start = prompt ("Think about a number and add it the next number after that:", '');
prompt (" Add 9 to the result", '');
prompt ("Divide the result to 2:", '')
prompt ("Now subtract the number that had you thought from this number:", '')
alert('Your answer is always 5!!  ;)')


let i = 0;
while (i < 3) {
    alert (i);
    ++i;

}





