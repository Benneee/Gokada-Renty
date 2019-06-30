import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  formButtonObj = {
    text: "SEARCH",
    type: "submit"
  };

  @Output() carType = new EventEmitter();

  constructor() {}

  search(searchQuery) {
    if (searchQuery) {
      console.log("[From Search Component]:", searchQuery.type);
      // this.carType = searchQuery.type;
      this.formButtonObj = {
        text: "UPDATE",
        type: "update"
      };
      this.sendCarType(searchQuery.type);
    }
  }

  sendCarType(data) {
    this.carType.emit(data);
  }

  ngOnInit() {}
}
