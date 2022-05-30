function selectionSortRecursive(arr) {
  if(arr.length === 0) {
    return []
  }

  let min = Math.min(...arr)
  let index = arr.indexOf(min)
  arr.splice(index, 1)

  let result = selectionSortRecursive(arr)
  result.unshift(min)
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// if arr Array.length === 1,
//   return arr[0]

// First, we should declare the base case that will break us out. We want to go through the recursion until we reach an empty array.
// Then, we need to find the minimum of the array, splice it out using the index, then run the function again using the new array.
// Realistically, the final recusion will reurn an empty array, so we can add each minumum to the result variable the recusion will be stored in. 
// Finally, we will return this resulting array.

// if arr is empty, 
//   return empty array

// find min using math
// find index using indexOf
// splice min from arr

// store recursion using new array
// in stored variable, unshift min
// return stored var