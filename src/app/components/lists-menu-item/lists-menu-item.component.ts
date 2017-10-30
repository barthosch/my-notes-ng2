import {Component, Input, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-lists-menu-item',
  templateUrl: './lists-menu-item.component.html',
  styleUrls: ['./lists-menu-item.component.css']
})
export class ListsMenuItemComponent implements OnInit {
  @Input('notesList') notesList: any;
  @Input('active') active: boolean;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  removeList() {
    this.notesService.removeList(this.notesList.id);
  }

}
