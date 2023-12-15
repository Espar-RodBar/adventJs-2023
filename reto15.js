/*
función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

. significa que hay vía libre.
* significa que hay un obstáculo.
! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

R mueve al robot una posición a la derecha.
L mueve al robot una posición a la izquierda.
U mueve al robot una posición hacia arriba.
D mueve al robot una posición hacia abajo.
Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

*/
function autonomousDrive(store, movements) {
  let posY = 0
  let posX = 0
  // search for first position
  for (let i = 0; i < store.length; i++) {
    const robotPos = store[i].indexOf('!')
    if (robotPos !== -1) {
      posX = robotPos
      posY = i
      store[posY] = store[posY].replace('!', '.')
    }
  }

  for (const move of movements) {
    const nextX = posX + (move === 'R') - (move === 'L')
    const nextY = posY - (move === 'U') + (move === 'D')
    if (store[nextY]?.[nextX] === '.') {
      posX = nextX
      posY = nextY
    }
  }

  store[posY] = store[posY].slice(0, posX) + '!' + store[posY].slice(posX + 1)
  return store
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

const result2 = autonomousDrive(['!..', '***'], ['U', 'L'])
console.log(result2)
