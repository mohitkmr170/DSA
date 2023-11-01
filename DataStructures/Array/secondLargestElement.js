function secondLargestElement(arr) {
  const arrUniqueListFromSet = [...new Set(arr)];
  const sortedArr = arrUniqueListFromSet.sort((a, b) => a - b);
  return sortedArr.length > 1 ? sortedArr[l - 2] : "No second largest element";
}

let arr = [10, 10, 10];
console.log(secondLargestElement(arr));
