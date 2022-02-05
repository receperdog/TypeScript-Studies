var Taxi = /** @class */ (function () {
  function Taxi() {}
  Taxi.prototype.travelTo = function (location) {
    console.log(
      "Taxi is going to ".concat(location.x, " , ").concat(location.y)
    );
  };
  return Taxi;
})();
var sariTaxi = new Taxi();
//sariTaxi.currentLocation.x = 172;
//sariTaxi.currentLocation.y = 184;
sariTaxi.travelTo({ x: 10, y: 11 });
