import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../classes/note";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent implements OnInit {
  @Input('note') note: Note;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  open() {
    console.log(this.note);
    //this.router.navigate(['/list', this.currentListId]);
  }

}
