import { HookTestModule } from './hook-test.module';

describe('HookTestModule', () => {
  let hookTestModule: HookTestModule;

  beforeEach(() => {
    hookTestModule = new HookTestModule();
  });

  it('should create an instance', () => {
    expect(hookTestModule).toBeTruthy();
  });
});
