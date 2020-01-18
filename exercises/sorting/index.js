// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]){
        const lesser = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = lesser
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++){
    const indexOfMin = arr[i]
    let indexOfLower = 0
    for (let j = (i+1); j < arr.length; j++){
      if (arr[j] < indexOfMin) {
        indexOfLower = j
      }
    }
    if ( indexOfMin != indexOfLower) {
      let lowest = arr[indexOfLower]
      let higher = arr[indexOfMin]
      arr[indexOfMin] = lowest
      arr[indexOfLower] = higher
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
