/*
 La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha.
 Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

*/

function cyberReindeer(road, time) {
  let plainRoad = '.' + road.slice(1)
  const santa = road.slice(0, 1)
  const estadosTrineo = []
  for (let actualTime = 1, position = 0; actualTime <= time; actualTime++) {
    estadosTrineo.push(
      plainRoad.slice(0, position) + santa + plainRoad.slice(position + 1)
    )
    if (actualTime === 5) {
      plainRoad = plainRoad.replaceAll('|', '*')
    }
    if (plainRoad[position + 1] !== '|') {
      position++
    }
  }

  return estadosTrineo
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
