function countTime(leds) {
  let time = 0
  while (leds.includes(0)) {
    time += 7
    const copyLeds = [...leds]
    for (let i = leds.length - 1; i >= 0; i--) {
      if (leds.at(i - 1)) {
        copyLeds[i] = 1
      }
    }
    leds = copyLeds
  }
  return time
}

console.log(countTime([0, 1, 1, 0, 1]), 7)
console.log(countTime([0, 0, 0, 1]), 21)
console.log(countTime([0, 0, 1, 0, 0]), 28)
