import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { FooterComponent } from "./footer/footer.component";
import { CarComponent } from "./car/car.component";
import { CarService } from "./car/car.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FooterComponent,
    CarComponent
  ],
  imports: [BrowserModule, AngularFontAwesomeModule, FormsModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
