/*
Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
*/

function getGiftsToRefill(a1, a2, a3) {
  const setRegalos = new Set([...a1, ...a2, ...a3])
  const regalosReponer = []
  for (const regalo of setRegalos) {
    let stock = 0
    if (a1.includes(regalo)) stock++
    if (a2.includes(regalo)) stock++
    if (a3.includes(regalo)) stock++
    if (stock <= 1) regalosReponer.push(regalo)
  }
  return regalosReponer
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(gifts)
