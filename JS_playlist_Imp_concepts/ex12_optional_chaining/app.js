// Here we have a optional timezone property given in the array below:
const people = [
  {
    name: "bob",
    location: {street: "123 main street",
    timezone: {offset: "+7.00"}}
  },
  {
    name: "peter",
    location: {street: "123 pine street"}
  },
  {
    name: "susan",
    location: {street: "123 apple street",
    timezone: {offset: "+9:00"}}
  },
];

people.forEach((person) => {
  // Here the line below works as each object has a name property associated with them
  // console.log(person.name);
  // Here the line below will give error cause we are trying to access a property on undefined as this property is not preset for all the objects
  // console.log(person.location.timezone.offset);
  // Here one solution is that, we will use the && operator to check for the property and use the offset as the last end condition to display it's results as shown below
  console.log(person.location && person.location.timezone && person.location.timezone.offset);
  // Here second solution is that of the optional chaining. The optional chaining provides a slightly better syntax. It will return undefined if no value is preset or we can also use the || (or) operator to provide a default value
  console.log(person?.location?.timezone?.offset || "hello world");
});