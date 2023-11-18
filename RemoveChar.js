// It's pretty straightforward. Your goal is to create a function that removes the
//  first and last characters of a string. You're given one parameter, the original string.
//   You don't have to worry with strings with less than two characters.


function removeChar(str) {
    if (str.length >= 2) {
      
      str=str.slice(1,-1);  // new string that includes all characters from the 2nd character (index 1) to the second-to-last character. 
      console.log(str);
    }
  
    return str;
  }
  
  removeChar("name");