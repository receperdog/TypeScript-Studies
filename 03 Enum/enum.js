var payment;
(function (payment) {
    payment[payment["a"] = 0] = "a";
    payment[payment["b"] = 1] = "b";
    payment[payment["c"] = 2] = "c";
})(payment || (payment = {}));
console.log(payment.a);
console.log(payment.b);
console.log(payment.c);
