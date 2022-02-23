//SNAP CRACKLE
function snapCrackle(maxValue) {
  let crackle = "";
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      crackle += "SnapCrackle, ";
    } else if (i % 5 === 0) {
      crackle += "Crackle, ";
    } else if (i % 2 !== 0) {
      crackle += "Snap, ";
    } else {
      crackle += i + ", ";
    }
  }
  let espaco = crackle.length - 2;
  crackle = crackle.slice(0, espaco);
  return crackle;
}
console.log("Snap Crackle: " + snapCrackle(12));

//SNAP CRACKLE PRIME
function snapCracklePrime(maxValue) {
  let crackle = "";
  let isPrime = "";
  for (let i = 1; i <= maxValue; i++) {
    isPrime = "";
    if ((i % 2 !== 0 && i % 3 !== 0 && i !== 1) || i == 2 || i == 3) {
      isPrime = "Prime";
    }

    if (i % 2 !== 0 && i % 5 === 0) {
      crackle += "SnapCrackle" + isPrime + ", ";
    } else if (i % 5 === 0) {
      crackle += "Crackle" + isPrime + ", ";
    } else if (i % 2 !== 0) {
      crackle += "Snap" + isPrime + ", ";
    } else {
      if (isPrime) {
        crackle += isPrime + ", ";
      } else {
        crackle += i + ", ";
      }
    }
  }
  let espaco = crackle.length - 2;
  crackle = crackle.slice(0, espaco);
  return crackle;
}
console.log("Bônus - Prime: " + snapCracklePrime(15));
