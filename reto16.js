/*
Es un array de números… ¡pero debería ser un objeto! Por ejemplo el árbol: [3, 1, 0, 8, 12, null, 1] se ve así:

//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
Lo que necesitamos es transformar el array en un objeto donde cada nodo del árbol tiene las propiedades value, left y right.

*/
function transformTree(tree) {
  const createNode = function (tree, index = 0) {
    let root = null
    if (index < tree.length && tree[index] !== null) {
      root = {
        value: tree[index],
        left: createNode(tree, 2 * index + 1),
        right: createNode(tree, 2 * index + 2),
      }
    }
    return root
  }
  const treeNew = createNode(tree)
  return treeNew
}

console.log(transformTree([1, 2, 3]))
