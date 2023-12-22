/*
El compilador trabaja con un contador que inicialmente tiene un valor de 0.
 Las instrucciones modificarán el valor de este contador.

Instrucciones del lenguaje de los elfos en base a símbolos:

+: Incrementa en 1 el valor del contador.
*: Multiplica por 2 el valor del contador.
-: Resta 1 al valor del contador.
%: Marca un punto de retorno. No modifica el contador.
<: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto.
   Si no hay un % previo, no hace nada.
¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
?: Finaliza un bloque condicional.
*/
function compile(code) {
  let counter = 0
  let returnIndex = null
  let blockConditionActive = false
  for (let i = 0; i < code.length; i++) {
    if (!blockConditionActive) {
      if (code[i] === '%') returnIndex = i + 1
      else if (code[i] === '<' && returnIndex) {
        i = returnIndex
        returnIndex = null
      }
      if (code[i] === '+') counter++
      else if (code[i] === '-') counter--
      else if (code[i] === '*') counter *= 2
    }
    if (code[i] === '¿' && counter <= 0) blockConditionActive = true
    else if (code[i] === '?') blockConditionActive = false
  }
  return counter
}

console.log(compile('++*-'), 3)
// (1 + 1) * 2 - 1 = 3

console.log(compile('++%++<'), 6)
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile('++<--'), 0)
// 1 + 1 - 1 - 1 = 0

console.log(compile('++¿+?'), 3)
// 1 + 1 + 1 = 3

console.log(compile('--¿+++?'), -2)
// - 1 - 1 = -2

console.log(compile('-+¿+?'), 0)
