/* 
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca 
primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
*/

// function findFirstRepeated(gifts) {
//   let firstRepeated = -1
//   for (let i = gifts.length - 1; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (gifts[i] === gifts[j]) {
//         firstRepeated = gifts[j]
//       }
//     }
//   }
//   return firstRepeated
// }

function findFirstRepeated(gifts) {
  const giftsSet = []
  for (const gift of gifts) {
    if (giftsSet.includes(gift)) return gift
    giftsSet.push(gift)
  }
  return -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const start = Date.now()
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId, Date.now() - start) // 3
