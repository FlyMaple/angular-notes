import { DynamicComponentModule } from './dynamic-component.module';

describe('DynamicComponentModule', () => {
  let dynamicComponentModule: DynamicComponentModule;

  beforeEach(() => {
    dynamicComponentModule = new DynamicComponentModule();
  });

  it('should create an instance', () => {
    expect(dynamicComponentModule).toBeTruthy();
  });
});
