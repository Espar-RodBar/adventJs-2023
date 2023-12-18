/*
intervalos de tiempo:
 Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y 
 el segundo es el final.
fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados.
*/
function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const sortedInt = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const sortInt = sortedInt[sortedInt.length - 1]
    const [start, end] = intervals[i]

    if (start <= sortInt[1] && end > sortInt[1]) {
      sortInt[1] = end
    } else if (start <= sortInt[1] && end <= sortInt[1]) {
    } else sortedInt.push(intervals[i])
  }

  return sortedInt
}
const start = performance.now()
console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ]),
  '[[2, 8]]'
)
console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ]),
  ' [[1, 6], [8, 10]]'
)
console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ]),
  '[[1, 2], [3, 4], [5, 6]]'
)
console.log('time:', performance.now() - start)
