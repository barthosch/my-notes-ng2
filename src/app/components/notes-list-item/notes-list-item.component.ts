import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../classes/note";

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent implements OnInit {
  @Input("note") note: Note;

  constructor() { }

  ngOnInit() {
  }

}
