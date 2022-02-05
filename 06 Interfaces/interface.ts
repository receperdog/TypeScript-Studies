interface location {
  x: number;
  y: number;
}

class Taxi {
  private color: string;
  private currentLocation: location;

  constructor(location: location, color: string) {
    this.currentLocation = location;
    this.color = color;
  }

  public setLocation(x: number, y: number): void {
    if (x < 0 || y < 0) {
      throw new Error("Coordinates can not be less than 0");
    } else {
      this.currentLocation.x = x;
      this.currentLocation.y = y;
    }
  }

  public getLocation(): string {
    return `Taxi's current location is ${this.currentLocation.x} , ${this.currentLocation.y} `;
  }

  toString(): string {
    return `Car's color is ${this.color} and current location is ${this.currentLocation.x} , ${this.currentLocation.y}`;
  }
}

let sariTaxi = new Taxi({ x: 10, y: 11 }, "blue");
//console.log(sariTaxi.toString());

console.log(sariTaxi.getLocation() + "\n");
sariTaxi.setLocation(-2, 20);
console.log(sariTaxi.getLocation() + "\n");

//console.log(sariTaxi.toString());

interface Passenger {
  name: string;
  address: string;
}

interface Vehicle {
  //travelTo(location: location): void;
  //getDistance(currentLocation, destinationLocation: Location);
  //getPassengers(passenger: Passenger): void;
  //removePassenger(passenger: Passenger): void;
}
