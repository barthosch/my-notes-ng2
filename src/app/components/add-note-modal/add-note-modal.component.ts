import { Component, OnInit } from '@angular/core';
import {Color} from "../../classes/color";
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../services/notes.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent implements OnInit {
  // todo handle Escape and Return keys

  private currentListId: string;
  private sub: Subscription;
  public newItem = {
    type: 'note',
    caption: 'New Note',
    color: new Color(0, 0, 0),
    due: new Date(),
    quantity: 0,
    details: ''
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private notesService: NotesService) { }

  addItemOk() {
    this.notesService.addNote(this.newItem);
    this.router.navigate(['/list', this.currentListId]);
  }

  cancel() {
    this.router.navigate(['/list', this.currentListId]);
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.currentListId = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
