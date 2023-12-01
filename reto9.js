/*
stán encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas.
Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que,
 dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), 
 devuelva el número mínimo


*/

function adjustLights(lights) {
  let adjusted = 0
  const numLights = lights.length
  const numRed = lights.filter((light) => light === '🔴').length
  const [impar, par] =
    numRed > numLights / 2 || (numRed === numLights / 2 && lights[0] === '🔴')
      ? ['🔴', '🟢']
      : ['🟢', '🔴']

  console.log(lights, impar, par)

  for (let i = 0; i < numLights; i++) {
    if (i % 2 === 0 && lights[i] !== impar) {
      lights[i] = impar
      adjusted++
    } else if (i % 2 === 1 && lights[i] !== par) {
      lights[i] = par
      adjusted++
    }
  }

  console.log(lights, adjusted)
  return adjusted
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
adjustLights(['🔴', '🔴', '🔴'])
