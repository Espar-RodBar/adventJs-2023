/*
Los elfos tienen un sistema especial para organizar los regalos:

El formato de entrada es especial, 
ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. 
Por ejemplo, '66a11b

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}.
 Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan
 en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. 
Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas.

*/

function organizeGifts(gifts) {
  const numbers = '1234567890'
  let cantidadRegalos = ''
  let regalosApilados = ''
  for (const char of gifts) {
    if (!numbers.includes(char)) {
      const pales = `${cantidadRegalos / 50}`.split('.')[0]
      const cajas = `${(cantidadRegalos % 50) / 10} `.split('.')[0]
      const bolsas = +cantidadRegalos - cajas * 10 - pales * 50
      regalosApilados += `[${char}]`.repeat(pales) + `{${char}}`.repeat(cajas)
      if (bolsas) regalosApilados += `(${char.repeat(bolsas)})`
      cantidadRegalos = ''
    } else {
      cantidadRegalos += char
    }
  }
  return regalosApilados
}

const start = performance.now()
organizeGifts(`7343426a134434321b`)
organizeGifts(`7343426a134434321b`)
organizeGifts(`7343426a134434321b`)
const end = performance.now()
console.log(end - start)
