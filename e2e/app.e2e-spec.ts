import { Ng2CliDemoFrankPage } from './app.po';

describe('ng2-cli-demo-frank App', function() {
  let page: Ng2CliDemoFrankPage;

  beforeEach(() => {
    page = new Ng2CliDemoFrankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
