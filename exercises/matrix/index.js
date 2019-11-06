// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = []
  for(let i=0; i<n; i++) {
    let arr = []
    results.push(arr)
  }
  let counter = 1
  let sRow= 0
  let eRow= n-1
  let sCol= 0
  let eCol= n-1

  while (sCol <= eCol && sRow <= eRow) {
    //top row
    for(let i = sCol; i<=eCol; i++) {
      results[sRow][i] = counter
      counter ++
    }
    sRow ++
    //right side
    for(let i = sRow; i<=eRow; i++) {
      results[i][eCol] = counter
      counter ++
    }
    eCol --
    //bottom row
    for(let i = eCol; i>=sCol; i--) {
      results[eRow][i] = counter
      counter ++
    }
    eRow--
    //left side
    for(let i = eRow; i>=sRow; i--){
      results[i][sCol] = counter
      counter ++
    }
    sCol++
  }
  return results
}

module.exports = matrix;
