function instructorWithLongestName(instructors){
  let longestName = null;
  let hold = null;

  for (let i = 0; i < instructors.length; i++) {
    if (i === 0) {
      longestName = instructors[i].name.length;
      hold = i;
    } else if (instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length;
      hold = i;
    }
  }
  return instructors[hold];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));