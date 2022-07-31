function cipher(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  const strArr = str.split("");
  const cipher = [];
  let upperCase = false;

  for (let i = 0; i < strArr.length; i++) {
    if (isLetter(strArr[i])) {
      letterValid(strArr[i]);
    } else {
      cipher.push(strArr[i]);
    }
  }

  let finalCipher = cipher.join("");
  return finalCipher;

  function letterValid(letter) {
    isUpperCase(letter);
    let lowerCase = letter.toLowerCase();
    let letterID = alphabetArr.indexOf(lowerCase);
    let cipherChar;
    let cipherID = letterID + 13;
    checkCipherID();
    cipherChar = alphabetArr[cipherID];
    convertToUpperCase();
    cipher.push(cipherChar);

    function convertToUpperCase() {
      if (upperCase == true) {
        cipherChar = alphabetArr[cipherID].toUpperCase();
      }
    }

    function checkCipherID() {
      if (cipherID > 25) {
        let extra = cipherID - 25;
        cipherID = extra - 1;
      }
    }
  }

  function isLetter(char) {
    if (/^[a-zA-Z()]+$/.test(char)) {
      return true;
    } else {
      return false;
    }
  }

  function isUpperCase(char) {
    if (char == char.toUpperCase()) {
      upperCase = true;
    } else {
      upperCase = false;
    }
  }
}
module.exports = cipher;
