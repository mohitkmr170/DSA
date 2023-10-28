function jsSort(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray;
}

// console.log(jsSort([10, 2, 40, 20]));

export { jsSort };
