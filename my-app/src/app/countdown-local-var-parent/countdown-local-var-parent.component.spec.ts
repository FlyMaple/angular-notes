import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLocalVarParentComponent } from './countdown-local-var-parent.component';

describe('CountdownLocalVarParentComponent', () => {
  let component: CountdownLocalVarParentComponent;
  let fixture: ComponentFixture<CountdownLocalVarParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownLocalVarParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLocalVarParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
