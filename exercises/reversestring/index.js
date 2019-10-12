// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //return str.split('').reverse().join('')

    //let arr = str.split('')
    //let reversed = []
    //for (let i = 0; i<arr.length; i++) {
    //  reversed.unshift(arr[i])
    //}
    //return reversed.join('')

    return str.split('').reduce((reversed, character) => {
      return character + reversed
    }, '')
}

module.exports = reverse;
