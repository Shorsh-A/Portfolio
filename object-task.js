/*
Task 1:
Write the code, one line for each action:

1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.*/

// let user = {
//   name: John,
//   surnam: Smith
// };
// user.name = Pete;
// delete user.name;

/*
Task 2:
Write the function isEmpty(obj) which returns "true" if the object 
has no properties, "false" otherwise.
*/
// let obj = false;
// function isEmpty(obj) {
//   for (let key in obj) {
//     return true;
//   }
//   return false;
// }
// console.log(isEmpty(obj));

/*
Task 3:
Is it possible to change an object declared with const?
 What do you think? //(y)
*/

// const user = {
//   name: 'John'
// };
// user.name = 'Pete';
// console.log(user.name);

/*
Task 4: */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
