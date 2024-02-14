function fitsInOneBox(boxes) {
  const sortedBoxes = boxes.sort(
    (boxA, boxB) =>
      boxA['l'] * boxA[`w`] * boxA['h'] - boxB['l'] * boxB[`w`] * boxB['h']
  )
  let itFits = true

  for (let i = 1; i < sortedBoxes.length && itFits; i++) {
    itFits =
      sortedBoxes[i - 1]['l'] < sortedBoxes[i]['l'] &&
      sortedBoxes[i - 1]['w'] < sortedBoxes[i]['w'] &&
      sortedBoxes[i - 1]['h'] < sortedBoxes[i]['h']
  }
  return itFits
}
