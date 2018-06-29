import { AttributeDirectiveModule } from './attribute-directive.module';

describe('AttributeDirectiveModule', () => {
  let attributeDirectiveModule: AttributeDirectiveModule;

  beforeEach(() => {
    attributeDirectiveModule = new AttributeDirectiveModule();
  });

  it('should create an instance', () => {
    expect(attributeDirectiveModule).toBeTruthy();
  });
});
