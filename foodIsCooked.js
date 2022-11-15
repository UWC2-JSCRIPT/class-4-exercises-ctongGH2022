/**
 * Cecilia Tong
 * Class 4 Exercise & Homework
 * Nov 8st, 2022
 * foodIsCooked
 */

/**
 1. Create a function foodIsCooked that accepts 3 parameters: kind, internalTemp, and doneness.  
 Based on the kind of meat, this function should check whether the internalTemp is above the value 
 below, and return true if it is:

Kind      Doneness     Temp should be above
chicken                      165
beef       'rare'            125
beef      'medium'           135
beef       'well'            155
*/

/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  // Write function HERE
  if (kind == 'chicken') {
    return internalTemp >= 165 ? true : false;    
  }
  else if (kind == 'beef'){    
    if (doneness == 'rare' && internalTemp >= 125) {
      return true;
    } else if (doneness == 'medium' && internalTemp >= 135) {
      return true;
    } else if (doneness == 'well' && internalTemp >= 155){
      return true;
    } else {
      return false;
    }
  }
  else { //invalid kind
    return false
  }
}

// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true