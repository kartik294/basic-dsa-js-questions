function checkPalindrome(string) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const inputString = "radar";
const result = checkPalindrome(inputString);

if (result) {
  console.log(`The string "${inputString}" is a palindrome.`);
} else {
  console.log(`The string "${inputString}" is not a palindrome.`);
}
