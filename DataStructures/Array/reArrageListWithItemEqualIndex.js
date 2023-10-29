function reArrageListWithItemEqualIndex(arr) {
  // let i = 0;
  // while (i < arr.length) {
  //   if (arr[i] >= 0 && arr[i] !== i) {
  //     let temp = arr[arr[i]];
  //     arr[arr[i]] = arr[i];
  //     arr[i] = temp;
  //   } else {
  //     i++;
  //   }
  // }

  /**
   * Using js sets
   */
  const s = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (s.has(i)) {
      arr[i] = i;
    } else arr[i] = -1;
  }

  return arr;
}

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
console.log(reArrageListWithItemEqualIndex(arr));
