import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerPrintChildsComponent } from './viewer-print-childs.component';

describe('ViewerPrintChildsComponent', () => {
  let component: ViewerPrintChildsComponent;
  let fixture: ComponentFixture<ViewerPrintChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerPrintChildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerPrintChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
