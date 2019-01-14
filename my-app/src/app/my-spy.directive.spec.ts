import { MySpyDirective } from './my-spy.directive';

describe('MySpyDirective', () => {
  it('should create an instance', () => {
    const directive = new MySpyDirective();
    expect(directive).toBeTruthy();
  });
});
