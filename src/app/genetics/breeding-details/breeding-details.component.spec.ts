import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingDetailsComponent } from './breeding-details.component';

describe('BreedingDetailsComponent', () => {
  let component: BreedingDetailsComponent;
  let fixture: ComponentFixture<BreedingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
