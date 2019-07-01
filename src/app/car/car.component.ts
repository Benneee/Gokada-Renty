import {
  Component,
  OnInit
} from "@angular/core";
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
  // filteredCars
  filtered = false;
  // @Input() filteredCars: Car[];
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
