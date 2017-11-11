import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-notes-list-items',
  templateUrl: './notes-list-items.component.html',
  styleUrls: ['./notes-list-items.component.css']
})
export class NotesListItemsComponent implements OnInit, OnDestroy {
  private sub: any;
  public notesList: any;
  public listType: string;

  constructor(private notesService: NotesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const activeListId = params['id'];
      this.notesList = this.notesService.selectList(activeListId);
      if (this.notesList) {
        this.listType = 'type-' + this.notesList.type;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
