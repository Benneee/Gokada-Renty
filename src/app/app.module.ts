import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [AppComponent, NavComponent, SearchComponent],
  imports: [BrowserModule, AngularFontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
