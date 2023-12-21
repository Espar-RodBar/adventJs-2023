/*

distributeGifts que reciba una matriz de números representando los juguetes 
en el trineo y devuelva otra matriz con el mismo tamaño y número de elementos pero 
donde cada elemento es el promedio de su valor original y los valores de sus vecinos.

Ten en cuenta que hay posiciones que son null y que no contarán para 
el promedio como vecino pero sí se sustituirá por el valor promedio de sus vecinos.

Los valores null no se tienen en cuenta para
 el cálculo del promedio pero sí se sustituyen por el valor promedio de sus vecinos.
*/
function distributeGifts(weights) {
  const result = JSON.parse(JSON.stringify(weights))
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      const vecino1 = weights[i - 1]?.[j]
      const vecino2 = weights[i + 1]?.[j]
      const vecino3 = weights[i]?.[j - 1]
      const vecino4 = weights[i]?.[j + 1]
      let suma = 0
      let div = 0
      if (vecino1) {
        div++
        suma += vecino1
      }
      if (vecino2) {
        div++
        suma += vecino2
      }
      if (vecino3) {
        div++
        suma += vecino3
      }
      if (vecino4) {
        div++
        suma += vecino4
      }
      if (weights[i][j]) {
        div++
        suma += weights[i][j]
      }
      result[i][j] = Math.round(suma / div)
    }
  }
  return result
}

function distributeGifts2(weights) {
  const cloneArray = (items) =>
    items.map((item) => (Array.isArray(item) ? cloneArray(item) : item))
  const result = cloneArray(weights)
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      const vecino1 = weights[i - 1]?.[j]
      const vecino2 = weights[i + 1]?.[j]
      const vecino3 = weights[i]?.[j - 1]
      const vecino4 = weights[i]?.[j + 1]
      let suma = 0
      let div = 0
      if (vecino1) {
        div++
        suma += vecino1
      }
      if (vecino2) {
        div++
        suma += vecino2
      }
      if (vecino3) {
        div++
        suma += vecino3
      }
      if (vecino4) {
        div++
        suma += vecino4
      }
      if (weights[i][j]) {
        div++
        suma += weights[i][j]
      }
      result[i][j] = Math.round(suma / div)
      console.log('vecino4', vecino4, div)
    }
  }
  return result
  return result
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
]

console.log(input)

const start = performance.now()
console.log(distributeGifts(input))
console.log(performance.now() - start)
const start2 = performance.now()
console.log(distributeGifts2(input))
console.log(performance.now() - start2)
