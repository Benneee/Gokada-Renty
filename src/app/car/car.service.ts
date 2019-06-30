import { Injectable } from "@angular/core";
import { Car } from "../car.model";

@Injectable()
export class CarService {
  /**
   * Model for car object
   * name: string,
   * passengerNums: number,
   * imagePath: string,
   * baggageCapacity: string,
   * airCon: string,
   * mileage: number,
   * transmission: string,
   * seatMaterial: string,
   * radioType: string;
   * rentAmount: number,
   * carType: string
   */

  private cars: Car[] = [
    new Car(
      "Toyota Camry",
      5,
      "https://images.pexels.com/photos/205337/pexels-photo-205337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "2 large suitcases, 2 small suitcases",
      "air conditioning",
      10,
      "4-speaker radio/CD system",
      "American leather",
      299,
      "Economy",
      "Automatic"
    ),

    new Car(
      "G Wagon",
      8,
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "4 large suitcases, 3 small suitcases",
      "air conditioning",
      10,
      "8-speaker radio/CD system",
      "Chiffon leather",
      990,
      "Standard",
      "Automatic"
    ),

    new Car(
      "Mercedes Benz",
      2,
      "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "2 small suitcases",
      "air conditioning",
      10,
      "6-speaker radio/CD system",
      "Tuscan Chiffon",
      350,
      "Standard",
      "Manual"
    ),

    new Car(
      "BMW GTA",
      4,
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "3 large suitcases",
      "air conditioning",
      7,
      "3-speaker radio/CD system",
      "Mexican Leather",
      900,
      "Compact",
      "Automatic"
    ),

    new Car(
      "Ferrari Camaro",
      4,
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "2 large suitcases, 1 small suitcase",
      "air conditioning",
      13,
      "3-speaker radio/CD system",
      "Colored Wool",
      500,
      "Intermediate",
      "Manual"
    )
  ];

  getCars(): any {
    return this.cars;
  }
}
