// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(i) {
     var index = 1;
     index ++
    if (i === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  return console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);