// MAP method
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'john',
        age: 26,
        position: 'intern',
    },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making a new one

// const ages = people.map((person) => {
//     return person.age;
// });
// The code below is same as the code above
const ages = people.map((person) => person.age * 2);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20
    };
});

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

result.innerHTML = names.join("");
