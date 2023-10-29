function kMostOccuringElement(arr, k, l) {
  const frequencyMap = new Map();
  for (let i = 0; i < l; i++) {
    if (!frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], 1);
    } else {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
    }
  }
  let mapSortedArr = new Array(...frequencyMap);
  console.log(mapSortedArr);

  mapSortedArr.sort((a, b) => {
    if (a[1] == b[1]) return b[0] - a[0];
    else return b[1] - a[1];
  });

  console.log(mapSortedArr);

  for (let i = 0; i < k; i++) {
    console.log(`${mapSortedArr[i][0]} => ${mapSortedArr[i][1]} times`);
  }
}

let arr = [3, 1, 4, 4, 5, 2, 6, 1],
  k = 2;
kMostOccuringElement(arr, k, arr.length);
