"use strict";
exports.__esModule = true;
var Bus = /** @class */ (function () {
    function Bus(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Bus.prototype.setLocation = function (x, y) {
        if (x < 0 || y < 0) {
            throw new Error("Coordinates can not be less than 0");
        }
        else {
            this.currentLocation.x = x;
            this.currentLocation.y = y;
        }
    };
    Bus.prototype.getLocation = function () {
        return "Bus's current location is ".concat(this.currentLocation.x, " , ").concat(this.currentLocation.y, " ");
    };
    Bus.prototype.toString = function () {
        return "Bus's color is ".concat(this.color, " and current location is ").concat(this.currentLocation.x, " , ").concat(this.currentLocation.y);
    };
    return Bus;
}());
