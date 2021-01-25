import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Route } from "@angular/compiler/src/core";
import { AffichageFonctionComponent } from './affichage-fonction/affichage-fonction.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AffichageFonctionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
