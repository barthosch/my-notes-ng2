import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-notes-lists',
  templateUrl: './notes-lists.component.html',
  styleUrls: ['./notes-lists.component.css'],
  providers: [NotesService]
})
export class NotesListsComponent implements OnInit {

  public notes;
  public activeListId;

  constructor(private notesService: NotesService) {
    this.notes = notesService.getNotes();
    this.activeListId = notesService.getActiveId();
    console.log("notes: ", this.notes);
  }

  ngOnInit() {
  }

}
