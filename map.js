  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
// let nums = [1, 2, 3, 4, 5];
//  let squares = [];
//  for (let num of nums) {
//   squares.push(num**2)
//  }

//  console.log(squares);

// // Using map()

// const multiplyTwo = function (num) {
//   return num*2;
// }

// const mapResults = nums.map(multiplyTwo);

// console.log(mapResults);



// Simplified w/ map()

// const mapResults = nums.map(num => num*2);
// console.log(mapResults);



// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

let studentsWithIds = students.map(student => { let {id, name} = student; 
  return {id, name}; 
});

console.log(studentsWithIds);

