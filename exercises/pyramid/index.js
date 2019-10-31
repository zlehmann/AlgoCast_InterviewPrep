// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, level= '') {
  if (row === n) {
    return
  }

  if (level.length === (n*2-1)) {
    console.log(level)
    return pyramid(n, row+1)
  }

  mid = Math.floor((2*n-1)/2)
  if (mid - row <= level.length && mid + row >= level.length) {
    level += "#"
  } else {
    level += " "
  }
  pyramid(n, row, level)
}

module.exports = pyramid;

// const mid = Math.floor((2*n-1)/2)
// for (let i=0; i<n; i++) {
//   let level=""
//   for (let j=0; j<(n*2-1); j++){
//     if (mid - i <= j && mid +i >= j) {
//       level += "#"
//     } else {
//       level += " "
//     }
//   }
//   console.log(level)
// }
