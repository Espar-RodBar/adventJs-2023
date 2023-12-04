/*
Tu tarea es escribir una función que tome una cadena de texto y 
revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
por lo que debes invertir los caracteres en el orden correcto.
*/
function reverseStr(str) {
  return str.split('').reverse().join('')
}

function removeParentesis(str) {
  return str.replaceAll('(', '').replaceAll(')', '')
}

function decode(message) {
  let letters = message
  const openIndex = []
  for (let i = 0; i < letters.length; i++) {
    const char = letters[i]
    if (char === '(') openIndex.push(i)
    else if (char === ')') {
      const openInd = openIndex.pop()
      letters =
        letters.slice(0, openInd) +
        reverseStr(letters.slice(openInd, i)) +
        letters.slice(i)
    }
  }
  const decodedStr = removeParentesis(letters)
  return decodedStr
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
