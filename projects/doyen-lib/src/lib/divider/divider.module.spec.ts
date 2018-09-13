import { DividerModule } from './divider.module';

describe('DividerModule', () => {
  let dividerModule: DividerModule;

  beforeEach(() => {
    dividerModule = new DividerModule();
  });

  it('should create an instance', () => {
    expect(dividerModule).toBeTruthy();
  });
});
