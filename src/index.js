module.exports = function towelSort (matrix = []) {
  let arr = [];
  let sort = [];

  if (matrix.length === 0) {
    return [];
  }
  
  for (let i = 0; i < matrix.length; i++) {
      if ((i % 2) === 0) {
        arr.push(matrix[i]);
      } else if ((i % 2) === 1) {
        arr.push(matrix[i].reverse());
      }
   
   for (let j = 0; j < arr[i].length; j++) {
      sort.push(arr[i][j]);
    }
  }

  return sort;
}
