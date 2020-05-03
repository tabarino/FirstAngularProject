import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTooltipComponent } from './material-tooltip.component';

describe('MaterialTooltipComponent', () => {
  let component: MaterialTooltipComponent;
  let fixture: ComponentFixture<MaterialTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
