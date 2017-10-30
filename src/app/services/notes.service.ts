import { MOCK_NOTES } from "../mock-notes";
import { Note } from "../classes/note";
import { Injectable } from '@angular/core';
import {Color} from "../classes/color";
import {UUID} from "angular2-uuid";
import {Router} from "@angular/router";

@Injectable() export class NotesService {
  public notes;
  public activeList;

  constructor(private router: Router) {
    console.log("new notes service");
    this.notes = MOCK_NOTES;
  }

  selectList(id: string) {
    console.log("select list", id);
    const lists = this.notes.filter((list) => list.id == id);
    if (lists.length) {
      this.activeList = lists[0];
    } else {
      // todo: check this
      this.activeList = {items: []};
    }
    return this.activeList;
  }

  addNote(options: any = {}) {
    let newNote = new Note({
      type: options.type || 'note',
      done: options.done || false,
      caption: options.caption = 'New Note',
      color: options.color || new Color(0, 0, 0),
      due: options.due || new Date(),
      quantity: options.quantity || 0,
      details: options.details || ''
    });

    this.activeList.items.push(newNote);
  }

  clearList() {
    this.activeList.items = [];
  }

  removeList(id: string) {
    for(let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id) {
        console.log("found");
        debugger;
        if (this.activeList && id === this.activeList.id) {
          console.log("navigate");
          this.router.navigate(["/lists"]);
        }

        this.notes.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  addList(options: any = {}) {
    let newList = {
      name: options.name || 'New List',
      type: options.type || 'todo',
      id: options.id || UUID.UUID(),
      items: options.items || []
    };
    this.notes.push(newList);
  }
}
