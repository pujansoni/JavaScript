// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");
console.log(specificFruit);

// objects
const person = {name: 'john', lastName: 'smith', job: 'developer'};
const {job, ...rest} = person;
console.log(job, rest);

// functions
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item) => {return total += item}, 0)/scores.length;
    console.log(average);
}

// getAverage(person.name, 89, 76, 81, 100);
const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores);