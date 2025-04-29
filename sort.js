/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  // group arrays
  // I learned I can group arrays in an object, and then sort the object by the height key.
  let people = [];

  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }

  // now that the arrays are grouped I can sort in descending order
  // I didn't understand the shorthand function that you provided to me for this, but now I do.
  // I'm using the sort method but in long form, because that is what I'm used to..
  people.sort(function (a, b) {
    return b.height - a.height;
  });
  // can also use people.sort((a, b) => b.height - a.height);

  let sortedNames = [];
  for (let i = 0; i < people.length; i++) {
    sortedNames.push(people[i].name);
  }

  return sortedNames;
};
