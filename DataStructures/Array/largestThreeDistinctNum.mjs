import { jsSort } from "../../Algorithms/Sorting/jsSort.mjs";

function largestThreeDistinctNum(arr) {
  let sortedArr = jsSort(arr);
  let length = sortedArr.length;
  return [sortedArr[length - 1], sortedArr[length - 2], sortedArr[length - 3]];
}

let arr = [10, 4, 3, 50, 3, 90];
console.log(largestThreeDistinctNum(arr));
