import { SeradiazpinPage } from './app.po';

describe('seradiazpin App', () => {
  let page: SeradiazpinPage;

  beforeEach(() => {
    page = new SeradiazpinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
