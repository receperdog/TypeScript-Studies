function average(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;
  if (typeof c !== "undefined") {
    total += c;
    count++;
  }
  const result = total / count;
  return "result : " + result;
}


console.log(average(1,2));
console.log(average(1,2,3));

