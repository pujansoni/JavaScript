const Chance = require("chance");
const chanceObj = new Chance();

const generatePerson = () => {
    return {
        "name": chanceObj.name(),
        "age": chanceObj.age(),
        "country": chanceObj.country({full: true}),
        "profession": chanceObj.profession()
    };
};

const people = Array.from({length: 1000}, generatePerson);

console.log(people);
