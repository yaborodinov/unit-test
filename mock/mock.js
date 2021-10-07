function map(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++){
    result.push(callback(array[i]))
  }
}

function forEach(items, callback) {
  for (let i = 0; i < items.length; i++){
    callback(items[i])
  }
}

module.exports = {map, forEach}