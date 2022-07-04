/*
Datatypes in Javascript 
Boolean, null, undefined, number, string


let a = true, b = null, c = undefined, d = 10, e = "abc";
console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));
console.log(d, typeof(d));
console.log(e, typeof(e));

*/

/* Functions

 square  = function(number) {
    return number * number;
 }
 console.log(square(5));

 let square2 = (num) => (num*num);
 console.log(square2(3));

 */

//Array Methods

// const characters = [
//    {
//        name: 'Luke Skywalker',
//        height: '172',
//        mass: '77',
//        eye_color: 'blue',
//        gender: 'male',
//    },
//    {
//        name: 'Darth Vader',
//        height: '202',
//        mass: '136',
//        eye_color: 'yellow',
//        gender: 'male',
//    },
//    {
//        name: 'Leia Organa',
//        height: '150',
//        mass: '49',
//        eye_color: 'brown',
//        gender: 'female',
//    },
//    {
//        name: 'Anakin Skywalker',
//        height: '188',
//        mass: '84',
//        eye_color: 'blue',
//        gender: 'male',
//    },
// ];

//MAP
//1. Get array of all names

// const names = characters.map((char)=>{
//    return char.name;
// })

// console.log(names);

//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

// const firstNames = characters.map((char) => {
//    return char.name.split(" ")[0];
// })

// console.log(firstNames);


//REDUCE
//1. Get total mass of all characters

// const totalMass = characters.reduce((acc,curr) => acc + parseInt(curr.mass),
// 0);

// console.log(totalMass);

//2. Get total height of all characters
//3. Get total number of characters by eye color

// const byEyeColor = characters.reduce((acc,curr) => {
//     const color = curr.eye_color;
//     if(acc[color]) {
//         acc[color]++;
//     }
//     else acc[color] = 1;
//     return acc;
// },{});

// console.log(byEyeColor);

//4. Get total number of characters in all the character names

// const lengthOfNames = characters.reduce((acc,curr)=>{
//     return acc + curr.name.length;
// },0);

// console.log(lengthOfNames);

//FILTER
//1. Get characters with mass greater than 100

// const chGreater100 = characters.filter(char => char.mass>100);
// console.log(chGreater100);

//2. Get characters with height less than 200

// const chHeightLess200 = characters.filter(char => char.height<200 )
// console.log(chHeightLess200);

//3. Get all male characters

// const allMaleCharacters = characters.filter(char => 
//    char.gender == 'male');

// console.log(allMaleCharacters);

//4. Get all female characters

// const allFemaleCharacters = characters.filter(char => 
//    char.gender == 'female');

// console.log(allFemaleCharacters);

//SORT
//1. Sort by mass

// const byMass = characters.sort((a,b) => {
//    return a.mass - b.mass;
// })
// console.log(byMass);


//EVERY
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//SOME
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//MAP

let fruits = new Map();
fruits.set("Apple",25);
fruits.set("Banana",35);
fruits.set("Orange",22);
fruits.set("Mango",40);

console.log("Size:",fruits.size);

fruits.forEach((val,fruit) =>{
    console.log(fruit,":",val);
})


