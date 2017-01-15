import { Ng2GiphyExamplePage } from './app.po';

describe('ng2-giphy-example App', function() {
  let page: Ng2GiphyExamplePage;

  beforeEach(() => {
    page = new Ng2GiphyExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
