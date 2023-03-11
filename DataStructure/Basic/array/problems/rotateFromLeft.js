// Using temp array
function rotateFromLeft(arr, d) {
  const temp = [];
  let k = 0;

  for (let i = d; i < arr.length; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let i = 0; i < d; i++) {
    temp[k] = arr[i];
    k++;
  }

  return temp;
}

console.log("By temp array: ", rotateFromLeft([1, 2, 3, 4, 5, 6, 7], 2));

function rotateFromLeftOneByOne(arr, d) {
  const length = arr.length;
  let k = 0;

  while (k < d) {
    const temp = arr[0];

    for (let i = 0; i < length - 1; i++) {
      arr[i] = arr[i + 1];
    }

    arr[length - 1] = temp;
    k++;
  }

  return arr;
}

console.log(
  "By rotate one by one",
  rotateFromLeftOneByOne([1, 2, 3, 4, 5, 6, 7], 2)
);
