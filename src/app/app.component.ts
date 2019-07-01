import { Component, OnInit, Input } from "@angular/core";
import { CarService } from "./car/car.service";
import { Car } from "./car.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "renty";
  firstReading: number = 0;
  secondReading: number = 0;

  passengerLeft: number = 1;
  passengerRight: number = 5;

  cars: Car[];
  filteredCars: Car[];
  subscription: Subscription;

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }

  searchForm(e) {
    const searchQuery = e.form;

    console.log("[car type]:", searchQuery.type);
    const carType = searchQuery.type;
    this.filter(carType);
  }

  filter(data) {
    this.filteredCars = data
      ? this.cars.filter(c =>
          c.carType.toLowerCase().includes(data.toLowerCase())
        )
      : this.cars;
    console.log("[data]:", data);
    console.log(this.filteredCars);
  }
  ngOnInit() {}
}
