import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyAnimationsComponent } from './zippy-animations.component';

describe('ZippyAnimationsComponent', () => {
  let component: ZippyAnimationsComponent;
  let fixture: ComponentFixture<ZippyAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
