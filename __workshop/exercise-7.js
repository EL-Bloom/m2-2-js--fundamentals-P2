// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(list) {
const array0 = ["Montreal", "Gotham", "USA ,"]; 
let newArray = (array0 + list); 
newArray = list.filter(function(NewArray) { 
  return newArray.length >5;  
});

return newArray;

}

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = keepLong;
 

function keepLong(list) {

  const longWords = list.filter(function (word) { 
    console.log(word);
    return word.length > 5;
  });
  return longWords;
} 

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);