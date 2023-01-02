const a = [0, -1, 2, -3, 1];

function printTriplets(arr = [], sum) {
  const triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const first = arr[i];
        const second = arr[j];
        const third = arr[k];

        if (
          first + second + third === sum &&
          first !== second &&
          second !== third &&
          third !== first
        ) {
          triplets.push([first, second, third]);
          break;
        }
      }
    }
  }

  return triplets;
}

console.log(printTriplets(a, 0));
