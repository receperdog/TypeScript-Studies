import { location } from "./Location";

class Bus {
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
    return `Bus's current location is ${this.currentLocation.x} , ${this.currentLocation.y} `;
  }

  toString(): string {
    return `Bus's color is ${this.color} and current location is ${this.currentLocation.x} , ${this.currentLocation.y}`;
  }
}
