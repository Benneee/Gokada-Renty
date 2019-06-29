import { Component, OnInit } from "@angular/core";
import { CarService } from "./car.service";
import { Car } from "./../car.model";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent implements OnInit {
  car: Car[];
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.car = this.carService.getCars();
  }
}
