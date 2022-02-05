function getAverage(...number: number[]): number {
  let total = 0;
  number.forEach(function (item) {
    total += item;
  });
  return total / number.length;
}
console.log(getAverage(1, 2, 3, 4, 5));
console.log(getAverage(1, 2, 3, 4, 5, 6));
