import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-notes-list-items',
  templateUrl: './notes-list-items.component.html',
  styleUrls: ['./notes-list-items.component.css']
})
export class NotesListItemsComponent implements OnInit, OnDestroy {
  private sub: any;
  public activeList: any;
  private notesLists: any;

  constructor(private notesService: NotesService,
              private activatedRoute: ActivatedRoute) {
    this.notesLists = notesService.getNotes();
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const activeListId = +params['id'];
      this.activeList = this.notesLists.filter((list) => list.id === activeListId)[0].items;
      console.log("activeList", this.activeList.items);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
