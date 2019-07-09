import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "note-component",
  templateUrl: "./note.component.html"
})
export class NoteComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  description: string;
  ngOnInit() {}
}
