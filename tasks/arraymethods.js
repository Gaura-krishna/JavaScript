const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Eve", age: 45 },
];


const array=[1,2,3,4]

// array.forEach((val)=>{
//     console.log(val)
// })


// for(i=0;i<=people.length-1;i++){
//     console.log("for loop",people[i].name);
//}



//ForEach
// people.forEach((person) => {
//     console.log("foreach",person.name);
// });


//Map
// const ages = people.map((person) => person.age);
// console.log(ages);


//Filter
// const olderThan35 = people.filter(
//     (person) => person.age > 35 );
// console.log(olderThan35);


//Reducer
// const numbers = [1, 2, 3, 4, 5];
// const total= numbers.reduce((acc,val)=>{
//     return(val+acc)
// })
// console.log(total)



//Splice
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// const removed = numbers.splice(2, 1);
// console.log("numbers",numbers);
// console.log("removed",removed); 


// numbers.splice(2, 0, 6, 7);
// console.log(numbers); 


//Split
const sentence = "This is a sample sentence.";
const words = sentence.split(" ");
console.log(words);

// const csvData = "John,Doe,30,New York";
// const fields = csvData.split(",");
// console.log(fields)



//Pop
// const fruits = ["apple", "banana", "cherry", "date"];

// const removedFruit = fruits.pop("grapes");
// console.log(removedFruit);
// console.log(fruits); 



//Push
// const colors = ["red", "green", "blue"];

// const newLength = colors.push("yellow", "purple");
// console.log(newLength); 
// console.log(colors); 



//Shift
const numbersShift = [1, 2, 3, 4];

const removedNumber = numbersShift.shift();
console.log(removedNumber);
console.log(numbersShift); 



//Unshift
// const names = ["Alice", "Bob", "Charlie"];

// const newLengthName = names.unshift("David", "Eve");
// console.log(newLengthName); 
// console.log(names);
