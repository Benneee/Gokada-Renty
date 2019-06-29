export class Car {
  public name: string;
  public passengerNums: number;
  public imagePath: string;
  public airCon: string;
  public mileage: number;
  public otherDetails: string[];

  constructor(
    name: string,
    passengerNums: number,
    imagePath: string,
    airCon: string,
    mileage: number,
    otherDetails: string[]
  ) {
    this.name = name;
    this.passengerNums = passengerNums;
    this.imagePath = imagePath;
    this.airCon = airCon;
    this.mileage = mileage;
    this.otherDetails = otherDetails;
  }
}
