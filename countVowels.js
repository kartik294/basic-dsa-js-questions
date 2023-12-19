function countVowels(str) {
  const lowercaseStr = str.toLowerCase();
  // Define a set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  //intialize the count of vowels
  let count = 0;
  for (let char of lowercaseStr) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}

// Example Usage
const inputString = "Hello, how are you?";
const vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);
