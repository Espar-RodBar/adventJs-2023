/*
array con la duración de cada entrega. El formato de la duración es HH:mm:ss, 
las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará 
para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 
debe ser mostrado con un signo negativo. 

Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00


*/
function calculateTime(deliveries) {
  const timeLimit = 7 * 3600
  let totalTime = 0

  const timeToStr = (s) => {
    const signo = s < 0 ? '-' : ''
    const timeAbs = Math.abs(s)
    const hours = `${Math.floor(timeAbs / 3600)}`.padStart(2, 0)
    const minutes = `${Math.floor((timeAbs % 3600) / 60)}`.padStart(2, 0)
    const seconds = `${(timeAbs % 3600) % 60}`.padStart(2, 0)
    return `${signo}${hours}:${minutes}:${seconds}`
  }

  deliveries.forEach((delivery) => {
    const timeAr = delivery.split(':').map((el) => +el)
    totalTime += timeAr[0] * 3600 + timeAr[1] * 60 + timeAr[2]
  })

  const timeStr = timeToStr(totalTime - timeLimit)
  return timeStr
}

const start = performance.now()
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']), '-02:20:00')
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']), '00:30:00')
console.log(
  calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']),
  '-05:29:00'
)
console.log(performance.now() - start)
