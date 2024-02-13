function distributeGifts(packOfGifts, reindeers) {
  const pesoRegalos = packOfGifts.reduce((peso, regalo) => {
    peso += regalo.length
    return peso
  }, 0)
  const fuerzaRenos = reindeers.reduce((fuerza, reno) => {
    fuerza += reno.length * 2
    return fuerza
  }, 0)
  console.log(fuerzaRenos, pesoRegalos)
  return Math.trunc(fuerzaRenos / pesoRegalos)
}
