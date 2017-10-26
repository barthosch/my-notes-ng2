import { UUID } from 'angular2-uuid';
import { Color } from './color';
import {Optional} from '@angular/core';

export class Note {
  public id: string;
  public type: string;
  public done: boolean;
  public caption: string;
  public color: Color;
  public due: Date;
  public quantity: Number;
  public details: string;

  constructor(options: any) {
    const {
      id = UUID.UUID(),
      type = 'note',
      done = false,
      caption = '',
      color = new Color(0, 0, 0),
      due = new Date(),
      quantity = 0,
      details = ''
    } = options;

    this.id = id;
    this.type = type;
    this.done = done;
    this.caption = caption;
    this.color = color;
    this.due = due;
    this.quantity = quantity;
    this.details = details;
  }
}
