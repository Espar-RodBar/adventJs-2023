function getFilesToBackup(lastBackup, changes) {
  const result = []
  for (const mod of changes) {
    if (mod[1] > lastBackup && !result.includes(mod[0])) {
      result.push(mod[0])
    }
  }
  return result.sort((a, b) => a - b)
}

const lastBackup = 1546300800
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
]

console.log(getFilesToBackup(lastBackup, changes))
