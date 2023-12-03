/*

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
*/

function findNaughtyStep(original, modified) {
  // compara cadena original y devuelve el char distinto
  let badStep = original.split('').reduce((bad, letter, i) => {
    if (!bad && letter !== modified[i]) {
      bad = letter === modified[i + 1] ? modified[i] : letter
    }
    return bad
  }, '')

  // Si no hay char distinto, check si la cadena modificada es mas grande
  if (!badStep && original.length < modified.length) {
    badStep = modified.at(-1)
  }
  return badStep
}
