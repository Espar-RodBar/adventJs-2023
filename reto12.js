/*
Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, 
pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). 
Y al ocurrir, la regla que sigue es:

Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Los caracteres que no son letras (como los dígitos) no se degradan.

*/

function checkIsValidCopy(original, copy) {
  const isValidChar = (o, c) => {
    if (o === undefined || c === undefined) return false
    const degradation = '#+:. '
    let isValid = false

    const oValue = o.charCodeAt(0)
    const difValue = oValue - c.charCodeAt(0)
    if (difValue === 0 || difValue === -32) isValid = true
    else if (
      ((oValue >= 65 && oValue <= 90) || (oValue >= 97 && oValue <= 122)) &&
      degradation.includes(c)
    ) {
      isValid = true
    } else if (degradation.indexOf(o) < degradation.indexOf(c)) isValid = true
    return isValid
  }

  for (let i = 0; i < original.length; i++) {
    if (!isValidChar(original[i], copy[i])) return false
  }
  return true
}

console.log(
  checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'),
  'true'
)
console.log(
  checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'),
  'false (por la p inicial'
)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s'), 'true')
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'), 'false')
