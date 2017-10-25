export class Color {
  private _red: Number = 0;
  private _green: Number = 0;
  private _blue: Number = 0;

  get red(): Number {
    return this._red;
  }

  set red(value: Number) {
    this._red = value;
  }

  get green(): Number {
    return this._green;
  }

  set green(value: Number) {
    this._green = value;
  }

  get blue(): Number {
    return this._blue;
  }

  set blue(value: Number) {
    this._blue = value;
  }

  constructor(red = 0, green = 0, blue = 0) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  get rgbString() : string {
    return `rgb(${this._red},${this._green},${this._blue}`;
  }

  set rgbString(newColor: string) {
    [this._red, this._green, this._blue] =
      newColor.replace("rgb(","")
        .replace(")","")
        .split(",")
        .map(colorString => parseInt(colorString))
        .map(colorValue => Math.max(colorValue, 0))
        .map(colorValue => Math.min(colorValue, 255));
  }
}
