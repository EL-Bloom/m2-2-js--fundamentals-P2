// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
    switch(true) {  
      case (grades > 89) :  
      console.log("A"); 
      break; 
      case (grades > 79):   
      console.log("B"); 
      break;   

      case  (grades > 69) :   
      console.log("C"); 
      break;  

      case (grades > 59):   
      console.log("D"); 
      break;  

      default :   
        console.log("F"); 
        break;  
    } 

} 
console.log(getLetterGrade([9]));
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
