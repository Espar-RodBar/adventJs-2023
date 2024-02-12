function countHours(year, holidays) {
  const festivos = holidays.map((festivo) => {
    const [mes, dia] = festivo.split('/')
    return { mes: +mes - 1, dia: +dia }
  })
  const horasTrabajadas = festivos.reduce((horas, dia) => {
    const diaSemana = new Date(+year, dia['mes'], dia['dia']).getDay()
    if (diaSemana === 0 || diaSemana === 6) return horas
    return horas + 2
  }, 0)

  return horasTrabajadas
}
