import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes-lists-item',
  templateUrl: './notes-lists-item.component.html',
  styleUrls: ['./notes-lists-item.component.css']
})
export class NotesListsItemComponent implements OnInit {
  @Input("noteItem") note : any;

  constructor() { }

  ngOnInit() {
  }

}
