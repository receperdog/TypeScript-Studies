function getAverage() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    var total = 0;
    number.forEach(function (item) {
        total += item;
    });
    return total / number.length;
}
console.log(getAverage(1, 2, 3, 4, 5));
console.log(getAverage(1, 2, 3, 4, 5, 6));
