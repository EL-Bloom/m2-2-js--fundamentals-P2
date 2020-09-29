// Exercise 1.1
//
// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
let fullName = "Ellie Lefebvre"; 
let number;
function countNames(fullName) {
 
 number = fullName.split(" ");
} 
console.log(number.length);
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(countNames("Morty Antoine Smith"));
// Create more test examples:

//
// This is needed for automated testing (more on that later)
module.exports = countNames;
