/*
cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
*/
function maxDistance(movements) {
  let max = 0
  let comodin = 0
  movements.split('').forEach((move) => {
    if (move === '>') {
      max++
    } else if (move === '<') {
      max--
    } else if (move === '*') {
      comodin++
    }
  })

  return Math.abs(max) + comodin
}

const result = maxDistance('>>*<')
console.log(result) // -> 2

const result2 = maxDistance('<<<>')
console.log(result2) // -> 2

const result3 = maxDistance('>***>')
console.log(result3) // -> 5
