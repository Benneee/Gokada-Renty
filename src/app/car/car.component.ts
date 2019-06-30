import { Component, OnInit } from "@angular/core";
import { CarService } from "./car.service";
import { Car } from "./../car.model";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent implements OnInit {
  cars: Car[];
  btnText = "View Car Details";
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  // toggleBtnText() {
  //   if (this.btnText === "View Car Details") {
  //     this.btnText = "Close Car Details";
  //   } else if ((this.btnText = "Close Car Details")) {
  //     this.btnText === "View Car Details";
  //   }
  // }
}
