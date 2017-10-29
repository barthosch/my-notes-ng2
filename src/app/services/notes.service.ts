import { MOCK_NOTES } from "../mock-notes";
import { Note } from "../classes/note";
import { Injectable } from '@angular/core';
import {Color} from "../classes/color";
import {UUID} from "angular2-uuid";

@Injectable()
export class NotesService {
  public notes = MOCK_NOTES;
  public activeList = MOCK_NOTES[0];

  constructor() { }

  selectList(id: string) {
    console.log("select list", id);
    const lists = this.notes.filter((list) => list.id == id);
    if (lists.length) {
      this.activeList = lists[0];
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
