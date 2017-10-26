import { UUID } from 'angular2-uuid';
import { Color } from './color';

export class Note {
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get done(): boolean {
    return this._done;
  }
  set done(value: boolean) {
    this._done = value;
  }
  get caption(): string {
    return this._caption;
  }
  set caption(value: string) {
    this._caption = value;
  }
  get color(): Color {
    return this._color;
  }
  set color(value: Color) {
    this._color = value;
  }

  constructor(
    private _id: string = UUID.UUID(),
    private _done: boolean = false,
    private _caption: string = "",
    private _color: Color = new Color(0,0,0)) {
  }
}

export class Deadline extends Note {
  get due(): Date {
    return this._due;
  }
  set due(value: Date) {
    this._due = value;
  }

  constructor(_id, _done, _caption, _color,
    private _due: Date) {
    super(_id, _done, _caption, _color);
  }
}

export class Task extends Note {
  get priority(): Number {
    return this._priority;
  }
  set priority(value: Number) {
    this._priority = value;
  }
  get details(): string {
    return this._details;
  }
  set details(value: string) {
    this._details = value;
  }

  constructor(_id, _done, _caption, _color,
              private _priority : Number = 0,
              private _details : string = "") {
    super(_id, _done, _caption, _color);
  }
}

export class Shopping extends Note {
  get quantity(): Number {
    return this._quantity;
  }
  set quantity(value: Number) {
    this._quantity = value;
  }

  constructor(_id, _done, _caption, _color,
              private _quantity: Number) {
    super(_id, _done, _caption, _color);
  }
}
