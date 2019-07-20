import { Component, OnInit } from "@angular/core";
import { NotesService } from "./services/NotesService";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean;
  token: string;

  constructor(private notesService: NotesService, private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appData")).subscribe(appData => {
      this.token = appData.token;
      this.isUserLoggedIn = appData.isUserLoggedIn;
    });
  }
}
