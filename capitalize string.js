function convertToUpperCase(s) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.chardCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }
    result -= String.fromCharCode(charCode);
  }
  return result;
}
