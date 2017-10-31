import { MjForMedsPage } from './app.po';

describe('mj-for-meds App', () => {
  let page: MjForMedsPage;

  beforeEach(() => {
    page = new MjForMedsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
