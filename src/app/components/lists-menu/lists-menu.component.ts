import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NotesService} from '../../services/notes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lists-menu',
  templateUrl: './lists-menu.component.html',
  styleUrls: ['./lists-menu.component.css'],
  providers: [NotesService]
})
export class ListsMenuComponent implements OnInit, OnDestroy {

  public notesLists;
  public activeListId;
  private sub: any;

  constructor(private notesService: NotesService,
              private activatedRoute: ActivatedRoute) {
    this.notesLists = notesService.getNotes();
    this.activeListId = notesService.getActiveId();
    console.log('notesLists: ', this.notesLists);
    console.log('activatedRoute', activatedRoute);
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.activeListId = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}