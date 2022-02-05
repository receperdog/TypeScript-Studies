function average(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    return "result : " + result;
}
console.log(average(1, 2));
console.log(average(1, 2, 3));
