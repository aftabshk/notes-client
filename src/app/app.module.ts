import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddNote } from "./components/AddNote/add-note.component";
import { NotesService } from "./services/NotesService";

@NgModule({
  declarations: [AppComponent, AddNote],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
