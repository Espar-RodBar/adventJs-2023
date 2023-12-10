/*
crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y
 un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol,
 y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad
formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura,
 tendríamos que construir este árbol:

   1
  2 3
 1 2 3
1 2 3 1
   |
*/

function createChristmasTree(ornaments, height) {
  const maxOrnamentsIndex = ornaments.length
  const treeAr = []
  for (let i = 1, ornInd = 0; i <= height; i++) {
    const line = []
    for (let j = 0; j < i; j++) {
      const ornament = ornInd % maxOrnamentsIndex
      ornInd++
      line.push(ornaments[ornament])
    }
    treeAr.push(' '.repeat(height - i) + line.join(' '))
  }
  treeAr.push(' '.repeat(height - 1) + '|\n')
  return treeAr.join('\n')
}

createChristmasTree('123', 4)
