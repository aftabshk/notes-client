import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddNote } from "./components/AddNote/add-note.component";
import { NotesService } from "./services/NotesService";
import { NoteComponent } from "./components/note/note.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    AddNote,
    NoteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
