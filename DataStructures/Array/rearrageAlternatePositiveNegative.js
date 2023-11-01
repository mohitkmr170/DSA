function rearrageAlternatePositiveNegative(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  let resultArr = new Array();
  let i = 0,
    j = sortedArray.length - 1;
  while (
    i <= (sortedArray.length - 1) / 2 &&
    j >= (sortedArray.length - 1) / 2
  ) {
    if (i === j) {
      resultArr.push(sortedArray[i]);
      return resultArr;
    }
    if (sortedArray[i] < 0 && sortedArray[j] > 0) {
      resultArr.push(sortedArray[j], sortedArray[i]);
    } else {
      resultArr.push(sortedArray[i], sortedArray[j]);
    }
    i++;
    j--;
  }
  return resultArr;
}
const arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(rearrageAlternatePositiveNegative(arr));
