function reverse(string) {
  let splitString = string.split("");

  let reverseString = splitString.reverse();

  let joinArr = reverseString.join("");

  return joinArr;
}
module.exports = reverse;
