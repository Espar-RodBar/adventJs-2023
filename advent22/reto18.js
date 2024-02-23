function dryNumber(dry, numbers) {
  const codigosNoImpresos = []
  for (let i = 1; i <= numbers; i++) {
    if (`${i}`.includes(`${dry}`)) codigosNoImpresos.push(i)
  }
  return codigosNoImpresos
}

console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15])
