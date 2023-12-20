/*
Buscaminas!
escribir una función que devuelva la misma matriz pero,
 en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes

 Los * representan los juguetes saboteados y
  las celdas vacías con un espacio en blanco son los lugares seguros
*/
function revealSabotage(store) {
  const iMax = store.length
  const jMax = store[0].length
  for (let i = 0; i < iMax; i++) {
    for (let j = 0; j < jMax; j++) {
      if (store[i][j] !== '*') {
        let bomb = 0
        if (i - 1 >= 0) {
          bomb += store[i - 1][j - 1] === '*' ? 1 : 0
          bomb += store[i - 1][j] === '*' ? 1 : 0
          bomb += store[i - 1][j + 1] === '*' ? 1 : 0
        }
        bomb += store[i][j - 1] === '*' ? 1 : 0
        bomb += store[i][j + 1] === '*' ? 1 : 0
        if (i + 1 < iMax) {
          bomb += store[i + 1][j - 1] === '*' ? 1 : 0
          bomb += store[i + 1][j] === '*' ? 1 : 0
          bomb += store[i + 1][j + 1] === '*' ? 1 : 0
        }
        store[i][j] = !bomb ? ' ' : `${bomb}`
      }
    }
  }
  return store
}
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' '],
]
console.log(revealSabotage(store))
console.log(
  `[['*', '2', '1', '1'],['1', '2', '*', '1'],['1', '2', '1', '1'],['*', '1', ' ', ' ']]`
)
