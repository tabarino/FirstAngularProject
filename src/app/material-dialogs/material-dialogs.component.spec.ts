import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDialogsComponent } from './material-dialogs.component';

describe('MaterialDialogsComponent', () => {
  let component: MaterialDialogsComponent;
  let fixture: ComponentFixture<MaterialDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
