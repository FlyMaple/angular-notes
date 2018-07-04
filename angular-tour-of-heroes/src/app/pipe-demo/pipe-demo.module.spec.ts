import { PipeDemoModule } from './pipe-demo.module';

describe('PipeDemoModule', () => {
  let pipeDemoModule: PipeDemoModule;

  beforeEach(() => {
    pipeDemoModule = new PipeDemoModule();
  });

  it('should create an instance', () => {
    expect(pipeDemoModule).toBeTruthy();
  });
});
