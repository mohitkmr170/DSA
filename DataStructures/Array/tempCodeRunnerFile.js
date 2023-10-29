let i = 0;
  while (i < arr.length) {
    if (arr[i] >= 0 && arr[i] !== i) {
      let temp = arr[arr[i]];
      arr[arr[i]] = arr[i];
      arr[i] = temp;
    } else {
      i++;
    }
  