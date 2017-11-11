import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../classes/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  @Input('note') note: Note;

  constructor() { }

  ngOnInit() {
  }

}
