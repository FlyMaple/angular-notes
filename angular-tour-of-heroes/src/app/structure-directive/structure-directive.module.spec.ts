import { StructureDirectiveModule } from './structure-directive.module';

describe('StructureDirectiveModule', () => {
  let structureDirectiveModule: StructureDirectiveModule;

  beforeEach(() => {
    structureDirectiveModule = new StructureDirectiveModule();
  });

  it('should create an instance', () => {
    expect(structureDirectiveModule).toBeTruthy();
  });
});
