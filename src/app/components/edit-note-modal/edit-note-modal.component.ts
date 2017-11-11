import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../../classes/note';

@Component({
  selector: 'app-edit-note-modal',
  templateUrl: './edit-note-modal.component.html',
  styleUrls: ['./edit-note-modal.component.css']
})
export class EditNoteModalComponent implements OnInit, OnDestroy {

  public note: Note;
  private sub: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  editItemOkay() {

  }

  cancel() {

  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const listId = params['id'];
      const noteId = params['noteId'];
      // todo: get note from notes service into "note"
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
