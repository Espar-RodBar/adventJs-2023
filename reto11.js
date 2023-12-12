/*
Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.
 Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

 Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, 
un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

*/

function getIndexsForPalindrome(word) {
  const totalLetters = word.length - 1
  const isPalindrome = (word) => word.split('').reverse().join('') === word
  // guard clause
  if (isPalindrome(word)) return []

  for (let i = 0; i <= totalLetters; i++) {
    for (let j = i + 1; j <= totalLetters; j++) {
      const newWord =
        word.slice(0, i) +
        word[j] +
        word.slice(i + 1, j) +
        word[i] +
        word.slice(j + 1)
      if (isPalindrome(newWord)) return [i, j]
    }
  }
  return null
}

const start = performance.now()
console.log(getIndexsForPalindrome('anna'), '[]') //
console.log(getIndexsForPalindrome('abab'), '[0, 1]') //
console.log(getIndexsForPalindrome('abac'), 'null') //
console.log(getIndexsForPalindrome('aaaaaaaa'), '[]') //
console.log(getIndexsForPalindrome('aaababa'), '[1, 3]') //
console.log(getIndexsForPalindrome('rotaratov'), '[4, 8]') //
console.log(performance.now() - start)
