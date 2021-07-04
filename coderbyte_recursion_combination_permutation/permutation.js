// Permutations of [a, b, c]
/*
[c, b, a]
[b, c, a]
[b, a, c]
[c, a, b]
[a, c, b]
[a, b, c]
*/
// Given a set of n things there are n! permutations
const permutations = (elements) => {
    if(elements.length === 0) return [ [] ];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const permsWithoutFirst = permutations(rest);
    
    const allPermutations = [];

    permsWithoutFirst.forEach(perm => {
        for(let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });

    return allPermutations;
};


console.log(permutations(['a', 'b', 'c']));
console.log(permutations(['a', 'b']));