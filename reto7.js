/*
dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

function drawGift(size, symbol) {
  const sideSqr = (s, i) => {
    const r = i % (s - 1)
    const c = Math.floor(i / (s - 1))
    const n = Math.abs(c * (s - 1) - r)
    return symbol.repeat(n - 1) + '#'
  }
  let square = []
  for (let i = 0; i < size * 2 - 1; i++) {
    let str
    if (i === 0 || i === size * 2 - 2) {
      str = '#'.repeat(size)
    } else if (i === size - 1) {
      str = '#'.repeat(size) + sideSqr(size, i)
    } else {
      str = '#' + symbol.repeat(size - 2) + '#' + sideSqr(size, i)
    }
    square.push(str)
  }
  for (let i = 0; i < size; i++) {
    square[i] = `${' '.repeat(size - 1 - i)}${square[i]}`
  }
  return square.join('\n') + '\n'
}

console.log(drawGift(5, '+'))
