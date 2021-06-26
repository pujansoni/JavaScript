// What is a combination?
// a collection of things where the order does not matter
/* Example: Combination of [a, b, c]
[]
[a]
[b]
[c]
[a, b]
[b, c]
[a, c]
[a, b, c] */
// Given a set of n things, there are 2^n possible combinations
const combinations = (elements) => {
    if(elements.length === 0) return [ [] ];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];

    combsWithoutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    });

    return [...combsWithFirst, ...combsWithoutFirst];
};

console.log(combinations(['a', 'b', 'c']));