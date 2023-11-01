function rangeSum(arr, query) {
  let i = query[0],
    sum = 0;
  while (i <= query[1]) {
    sum += arr[i];
    i++;
  }
  return sum;
}

let arr = [1, 1, 2, 1, 3, 4, 5, 2, 8];
let query = [
  [0, 4],
  [1, 3],
  [2, 4],
];
//Print all sums w.r.t query
for (const element of query) {
  console.log(
    `Sum of arr[] elements in range ${[element[0], element[1]]} is ${rangeSum(
      arr,
      element
    )}`
  );
}
