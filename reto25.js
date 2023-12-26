/*
Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos los regalos. 
Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

El mapa es una cadena de texto multi línea donde cada caracter representa una casilla. 
Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. 
Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.
*/

function travelDistance(map) {
  function getPos(ar, letter) {
    for (let y = 0; y < ar.length; y++) {
      const x = ar[y].indexOf(letter)
      if (x !== -1) return [x, y]
    }
    return null
  }
  let distancia = 0
  let niño = 1

  const mapAr = map.split('\n')

  let startPos = getPos(mapAr, 'S')
  let endPos

  while (true) {
    endPos = getPos(mapAr, `${niño}`)
    if (endPos === null) break
    distancia +=
      Math.abs(endPos[0] - startPos[0]) + Math.abs(endPos[1] - startPos[1])
    niño++
    startPos = endPos
  }
  return distancia
}

const map = `.....1....
..........
..........
..S.3.....
......2...`

const result = travelDistance(map)
console.log(result, '12')
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2, ' 2')
