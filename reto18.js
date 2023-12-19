/*
una función que, dada una hora en formato 'HH:MM', 
cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.
*/

function drawClock(time) {
  const timeStr = {
    0: ['***', '* *', '* *', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
    3: ['***', '  *', '  *', '***', '  *', '  *', '***'],
    4: ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
    5: ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
    6: ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '* *', '***', '* *', '* *', '***'],
    9: ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ':': ['   ', '   ', ' * ', '   ', ' * ', '   ', '   '],
  }
  const [hourStr, minutesStr] = time.split(':')
  const [hourDig1, hourDig2] = hourStr.split('')
  const [minDig1, minDig2] = minutesStr.split('')

  const stringTime = []
  for (let i = 0; i < 7; i++) {
    const line = [
      ...timeStr[hourDig1][i].split(''),
      ' ',
      ...timeStr[hourDig2][i].split(''),

      ...timeStr[':'][i].split(''),

      ...timeStr[minDig1][i].split(''),
      ' ',
      ...timeStr[minDig2][i].split(''),
    ]
    stringTime.push(line)
  }

  return stringTime
}

console.log(drawClock('01:30'))
