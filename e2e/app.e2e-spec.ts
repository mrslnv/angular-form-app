import { AngularFormAppPage } from './app.po';

describe('angular-form-app App', function() {
  let page: AngularFormAppPage;

  beforeEach(() => {
    page = new AngularFormAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
