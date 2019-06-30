import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

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

  @Output() theForm = new EventEmitter();

  constructor() {}

  search(searchForm: NgForm) {
    if (searchForm.value) {
      // console.log("[From Search Component]:", searchQuery.type);
      this.formButtonObj = {
        text: "UPDATE",
        type: "update"
      };
      this.theForm.emit({
        form: searchForm.value
      });
      // console.log("data sent", this.theForm);
    }
  }

  ngOnInit() {}
}
