import { AkshayStorePage } from './app.po';

describe('akshay-store App', () => {
  let page: AkshayStorePage;

  beforeEach(() => {
    page = new AkshayStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
