import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "renty";
  firstReading: number = 0;
  secondReading: number = 0;

  passengerLeft: number = 1;
  passengerRight: number = 5;
}
