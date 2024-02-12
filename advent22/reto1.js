function wrapping(gifts) {
  const data = gifts.map((regalo) => {
    const tempRegalo = `*${regalo}*`
    const long = tempRegalo.length
    return (
      ''.padStart(long, '*') + '\n' + tempRegalo + '\n' + ''.padEnd(long, '*')
    )
  })
  return [...data]
}
