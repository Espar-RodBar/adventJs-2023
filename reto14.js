/*
las casas tienen un sistema de seguridad conectado entre casas adyacentes,
 por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, 
tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una 
noche sin activar ninguna alarma.
*/

function maxGifts(houses) {
  if (houses.length === 0) return 0
  else if (houses.length === 1) return houses[0]
  else {
    let sumNoAdy = houses[0]
    let sumAdy = Math.max(houses[0], houses[1])

    for (let i = 2; i < houses.length; i++) {
      const sumTmp = Math.max(sumNoAdy + houses[i], sumAdy)
      sumNoAdy = sumAdy
      sumAdy = sumTmp
    }
    return sumAdy
  }
}

const start = performance.now()
console.log(maxGifts([2, 4, 2]), 4)
console.log(maxGifts([3, 5, 4]), 7)
console.log(maxGifts([5, 1, 1, 5]), 10)
console.log(maxGifts([4, 1, 1, 4, 2, 1]), 9)
console.log(maxGifts([1, 3, 1, 3, 100]), 103)
console.log(maxGifts([2, 7, 9, 3, 1]), 12)
console.log(maxGifts([2, 7]), 7)
console.log(maxGifts([2]), 2)
console.log(performance.now() - start)
