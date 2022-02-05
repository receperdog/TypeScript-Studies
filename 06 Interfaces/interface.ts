interface location {
  x: number;
  y: number;
}

interface Passenger {
  name: string;
  address: string;
}

interface Vehicle {
  currentLocation: location;
  travelTo(location: location): void;
  //getDistance(currentLocation, destinationLocation: Location);
  //getPassengers(passenger: Passenger): void;
  //removePassenger(passenger: Passenger): void;
}

class Taxi implements Vehicle {
  currentLocation: location;
  constructor(location: location) {
    this.currentLocation = location;
  }
  travelTo(location: location): void {
    console.log(`Taxi is going to ${location.x} , ${location.y}`);
  }
}

let sariTaxi = new Taxi({ x: 10, y: 11 });
//sariTaxi.currentLocation.x = 172;
//sariTaxi.currentLocation.y = 184;
sariTaxi.travelTo({ x: 100, y: 111 });
