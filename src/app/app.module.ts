import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { AddNote } from "./components/AddNote/add-note.component";
import { LoginComponent } from "./components/login/login.component";
import { NoteComponent } from "./components/note/note.component";
import { Notes } from "./components/notes/notes.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NotesService } from "./services/NotesService";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { NotesEffects } from "./store/notes/notes.effects";
import { LoginEffect } from "./store/login/login.effects";
import { SignupEffects } from "./store/signup/signup.effects";

@NgModule({
  declarations: [
    AppComponent,
    AddNote,
    NoteComponent,
    LoginComponent,
    SignupComponent,
    Notes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ appData: reducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([NotesEffects, LoginEffect, SignupEffects])
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
