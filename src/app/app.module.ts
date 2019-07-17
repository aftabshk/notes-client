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
import { StoreModule } from "@ngrx/store";
import { notesReducer } from "./store/Notes/notes.reducer";

@NgModule({
  declarations: [
    AppComponent,
    AddNote,
    NoteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ appState: notesReducer })
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
