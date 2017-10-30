import { Component, OnInit } from '@angular/core';
import { NotesService } from "../../services/notes.service";

@Component({
  selector: 'app-notes-list-controls',
  templateUrl: './notes-list-controls.component.html',
  styleUrls: ['./notes-list-controls.component.css']
})
export class NotesListControlsComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  addNote() {
    console.log("addNote...");
    this.notesService.addNote();
  }

  clearList() {
    console.log("clearList");
    // todo: show confirmation prompt
    this.notesService.clearList();
  }

  editList() {
    console.log("editList");
    // todo: show edit window
  }

  ngOnInit() {
  }

}
