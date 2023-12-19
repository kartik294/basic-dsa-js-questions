function isUnique(s) {
  let st = new Set();
  for (let i = 0; i < s.length; i++) {
    if (st.has(s[i])) {
      return false;
    }
    st.add(s[i]);
  }
  return true;
}
