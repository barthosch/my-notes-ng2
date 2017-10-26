import { MOCK_NOTES } from "../mock-notes";
import { Note, Deadline, Task, Shopping } from "../classes/note";
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  constructor() { }

  getNotes() : any[] {
    return MOCK_NOTES
  }

  getActiveId() : Number {
    return 0;
  }
}
