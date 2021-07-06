// faster/easier way to access/unpack values from arrays

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const {
    first: firstName,
    last,
    city,
    zip,
    siblings: { sister: favoriteSibling },
} = bob;

console.log(firstName, last, city, zip, favoriteSibling);

function printPerson({first, last, city, siblings: {sister}}) {
    console.log(first, last, sister, city);
}

printPerson(bob);