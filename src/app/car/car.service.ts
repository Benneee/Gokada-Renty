import { Injectable } from "@angular/core";
import { Car } from "../car.model";

@Injectable()
export class CarService {
  /**
   * Model for car object
   * name: string,
   * passengerNums: number,
   * imagePath: string,
   * airCon: string,
   * mileage: number,
   * otherDetails: string[]
   */

  private cars: Car[] = [
    new Car(
      "Toyota Camry",
      5,
      "https://di-uploads-pod16.dealerinspire.com/josephtoyotaofcincinnati/uploads/2018/10/toyota_camry2019_grey.png",
      "air condition",
      10,
      ["4-speaker radio/CD system", "American leather", "Automatic"]
    ),

    new Car(
      "Mercedes Benz",
      2,
      "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "air condition",
      10,
      ["6-speaker radio/CD system", "Tuscan Chiffon", "Manual"]
    )
  ];

  getCars() {
    return this.cars;
  }
}
