/*
lista de platos navideños donde cada elemento consiste en una lista de strings que comienza 
con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya
 al menos 2 platos que los contengan.

 devolvemos un array de arrays donde la primera posición es el nombre del
  ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.
 */

function organizeChristmasDinner(dishes) {
  const organizer = {}

  for (const dish of dishes) {
    const [plato, ...ingredientes] = dish
    for (const ingrediente of ingredientes) {
      if (!organizer[ingrediente]) organizer[ingrediente] = [plato]
      else organizer[ingrediente].push(plato)
    }
  }

  const ingredientsAr = Object.entries(organizer)
    .sort()
    .filter((el) => el[1].length > 1)
    .map((ingredient) => [ingredient[0], ...ingredient[1].sort()])

  return ingredientsAr
}

const dishes = [
  ['christmas turkey', 'turkey', 'sauce', 'herbs'],
  ['cake', 'flour', 'sugar', 'egg'],
  ['hot chocolate', 'chocolate', 'milk', 'sugar'],
  ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
]

console.log(organizeChristmasDinner(dishes))
console.log([
  ['sauce', 'christmas turkey', 'pizza'],
  ['sugar', 'cake', 'hot chocolate'],
])
