

// normal arrays


let groceries = ['bread', 'milk', 'eggs', 'ice cream', 'vegetables', 'cheese']
// remember to use single quotations instead of double because single quotes give values whilst doubles give names
// also remember that an array starts with 0 instead of 1
console.log(groceries[4]);

groceries.push('fruit');
// you can add more than 1 item into an array with "push" by adding a comma and single quotes ---example--- groceries.push('fruit', 'chips');

console.log(groceries)

//_________________________________________________________________________________________________________________________________________________________________


// multi arrays

let studentRoster = [
    ["person 1", 13, 92.1],
    ["person 2", 14, 98.6],
    ["person 3", 12, 84.2],
];

// remember to add commas after each array

console.log(studentRoster);
console.log(studentRoster[2][0])
// will give you person 3's  name and will print ---> "person 3"

//_________________________________________________________________________________________________________________________________________________________________


// finding the lenght of an array

console.log(groceries.length);
// will give you a number NOT starting with 0 