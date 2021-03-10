import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingProcessViewerComponent } from './breeding-process-viewer.component';

describe('BreedingProcessViewerComponent', () => {
  let component: BreedingProcessViewerComponent;
  let fixture: ComponentFixture<BreedingProcessViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedingProcessViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingProcessViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
