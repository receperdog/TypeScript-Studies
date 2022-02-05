var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.setLocation = function (x, y) {
        if (x < 0 || y < 0) {
            throw new Error("Coordinates can not be less than 0");
        }
        else {
            this.currentLocation.x = x;
            this.currentLocation.y = y;
        }
    };
    Taxi.prototype.getLocation = function () {
        return "Taxi's current location is ".concat(this.currentLocation.x, " , ").concat(this.currentLocation.y, " ");
    };
    Taxi.prototype.toString = function () {
        return "Car's color is ".concat(this.color, " and current location is ").concat(this.currentLocation.x, " , ").concat(this.currentLocation.y);
    };
    return Taxi;
}());
var sariTaxi = new Taxi({ x: 10, y: 11 }, "blue");
//console.log(sariTaxi.toString());
console.log(sariTaxi.getLocation() + "\n");
sariTaxi.setLocation(-2, 20);
console.log(sariTaxi.getLocation() + "\n");
