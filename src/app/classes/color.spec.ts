/* tslint:disable:no-unused-variable */
import { Color } from './color';

describe('Color', () => {
  let color: Color;

  beforeEach(() => {
    color = new Color();
  });

  it('rgb(50,100,200) should return {red: 50, green: 100, blue: 200}', () => {
    color.rgbString = "rgb(50,100,200)";
    const checkColor = new Color(50,100,200);
    expect(color).toEqual(checkColor);
  });
});
