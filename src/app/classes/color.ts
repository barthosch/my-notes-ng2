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

  get hexString() : string {
    const componentToHex = (component) => {
      const hex = component.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(this._red) + componentToHex(this._green) + componentToHex(this._blue);
  }

  set hexString(newColor: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newColor);
    this._red = parseInt(result[1], 16);
    this._green = parseInt(result[2], 16);
    this._blue = parseInt(result[3], 16);
  }
}
