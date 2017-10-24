import { MyNotesNg2Page } from './app.po';

describe('my-notes-ng2 App', function() {
  let page: MyNotesNg2Page;

  beforeEach(() => {
    page = new MyNotesNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
