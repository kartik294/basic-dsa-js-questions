function findLargestElement(arr) {
  if (arr.length === 0) {
    return false;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numbers = [3, 7, 2, 9, 1];
const largest = findLargestElement(numbers);
console.log("Output:", largest); // Output: 9
