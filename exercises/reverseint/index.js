// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
//  if (n === 0) {
//    return 0
//  }

//  if (n < 0) {
//    let result = n* -1
//    result = result.toString().split('').reverse().join('')
//    return parseInt(result) * -1
//  } else {
//    let result = n
//    return parseInt(n.toString().split('').reverse().join(''))
//  }

  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)


}

module.exports = reverseInt;
