// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];

console.log(friends);

const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

// objects

const person = {name: 'john', job: 'developer'};
// after using the spread operator to copy the object we can either add new property or override the old property
const newPerson = {...person, city: 'chicago', name: 'peter'};

console.log(person);
console.log(newPerson);