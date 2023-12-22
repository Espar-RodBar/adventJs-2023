/*
El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón…
 Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.

 https://mars.codes.
*/
function findBalancedSegment(message) {
  const oneZeroAr = []
  for (let i = 0; i < message.length - 1; i++) {
    for (let j = i + 2; j <= message.length; j++) {
      const balanceSegment = message.slice(i, j)
      const unos = balanceSegment.filter((el) => el === 1).length
      const zeros = balanceSegment.filter((el) => el === 0).length

      if (unos === zeros && unos > 0) oneZeroAr.push([i, j - 1])
    }
  }
  oneZeroAr.sort((a, b) => b[1] - b[0] - a[1] + a[0])
  return oneZeroAr[0] || []
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
console.log([2, 5])

console.log(findBalancedSegment([1, 1, 0]))
console.log([1, 2])

console.log(findBalancedSegment([1, 1, 1]))
console.log([])
