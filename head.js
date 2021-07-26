const head = function(arr) {
  let value = arr[0];
  if (arr[0] === undefined) {
    value = ''
    return value
  }
  return value;
}

module.exports = head;
