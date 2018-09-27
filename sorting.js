var myarray=[25, 8, 7, 41]

//ascending
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
});

console.log(myarray);

//descending

myarray.sort(function(a,b) {
  return b - a
});

console.log(myarray);

//advanced sorting

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  } if (nameA === nameB)
    return a.age - b.age;
});

console.log(students);