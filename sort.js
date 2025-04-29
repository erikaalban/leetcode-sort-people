/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // group arrays
    let people = [];

    for ( let i=0; i<names.length; i++) {
        people.push({name: names[i], height: heights[i]})
    }

    // now that the arrays are grouped I can sort in descending order
    people.sort(function(a, b) {
        return b.height - a.height;
    });
    // can also use people.sort((a, b) => b.height - a.height);

    let sortedNames = [];
    for (let i = 0; i < people.length; i++) {
        sortedNames.push(people[i].name);
    }

    return sortedNames;
};
