// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++){
//     const noToBeAdded = target - array[ i ];
//     for (let j = 0; j < array.length; j++){
//       if (array[ j ] === noToBeAdded) {
//         return true;
//       }
//     }
//   }
//   //if you reach the end of an array without getting the noToBeAdded 
//   return false;
// }

// /* 
//   Write the Big O time complexity of your function here
//   runtime: o(n^2)
//   space:0(n)
// */

// /* 
//   Add your pseudocode here
//   iterate through the numbers in the array 
//   for the current number ,identify a number that will add to get the target(noToBeAdded=target-currentNumber)
//   iterate through the rest of the array to check if the other number is the number to be added to get target,
//   if so,return true ,else return false.

// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;

// function hasTargetSum(array, target) {
//   const myNumbObject = {} 
//     // Write your algorithm here
//     for(var i=0; i<array.length; i++){
//       for(var j=i+1; j<array.length; j++){
//         if(array[i] + array[j] === target){
//           return true;
//         }
       
        
//       }
//     }
//     return false;
  
  
//     }
  
//   /* 
//     Write the Big O time complexity of your function here
//   */
  
//   /* 
//     Add your pseudocode here
      
//       // const seenNumbers = {};
    
//       // for (const number of array) {
//       //   // n steps
//       //   const complement = target - number;
//       //   if (complement in seenNumbers) return true;
//       //   seenNumbers[number] = true;
      
//       // }
//       // return false;
//   */
  
//   /*
//     Add written explanation of your solution here
//   */
  
//   // You can run `node index.js` to view these console logs
//   if (require.main === module) {
//     // add your own custom tests in here
//     console.log("Expecting: true");
//     console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
//     console.log("");
  
//     console.log("Expecting: true");
//     console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
//     console.log("");
  
//     console.log("Expecting: false");
//     console.log("=>", hasTargetSum([1, 2, 5], 4));
//   }
  
//   module.exports = hasTargetSum;
  

//runtime: 0(n)
function hasTargetSum(array, target) {
  const myNumbObject = {} 

  //n steps
  for (let i = 0; i < array.length; i++) {
    const noToBeAdded = target - array[ i ];
    if (myNumbObject[ noToBeAdded ]) return true;
    myNumbObject[ array[ i ] ] = true;
  }
  return false;
}

//optimize code
function hasTargetSum(array, target) {
  const myNumbObject = {} 

  for (const number of array) { 
    const noToBeAdded = target - number;
    if (myNumbObject[ noToBeAdded ]) return true;
    myNumbObject[number] = true;
  }
  return false;
}

//     Add your pseudocode here

//create an object to keep track of numbers we've already seen
//iterate through each number in the array
//for the current number ,identify a compliment that adds to the target ()
//check if any key on our object is the compliment
//if so return true
//otherwise add that number to the object
//if no number found return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
console.log("");
  
console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
console.log("");
  
console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
 }
  
module.exports = hasTargetSum;
  