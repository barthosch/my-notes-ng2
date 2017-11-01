import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../services/notes.service";
import {Color} from "../../classes/color";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public action: string;
  private sub: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.action = params['action'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
