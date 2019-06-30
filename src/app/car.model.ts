export class Car {
  public name: string;
  public passengerNums: number;
  public imagePath: string;
  public baggageCapacity: string;
  public airCon: string;
  public mileage: number;
  public radioType: string;
  public seatMaterial: string;
  public rentAmount: number;
  public carType: string;
  public transmission: string;

  constructor(
    name: string,
    passengerNums: number,
    imagePath: string,
    baggageCapacity: string,
    airCon: string,
    mileage: number,
    radioType: string,
    seatMaterial: string,
    rentAmount: number,
    carType: string,
    transmission: string
  ) {
    this.name = name;
    this.passengerNums = passengerNums;
    this.imagePath = imagePath;
    this.baggageCapacity = baggageCapacity;
    this.airCon = airCon;
    this.mileage = mileage;
    this.radioType = radioType;
    this.seatMaterial = seatMaterial;
    this.rentAmount = rentAmount;
    this.carType = carType;
    this.transmission = transmission;
  }
}
