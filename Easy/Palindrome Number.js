var isPalindrome = (x) => {
  x = x.toString();
  return x === x.split("").reverse().join("");
};
