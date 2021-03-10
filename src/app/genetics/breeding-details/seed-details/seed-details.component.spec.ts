import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedDetailsComponent } from './seed-details.component';

describe('SeedDetailsComponent', () => {
  let component: SeedDetailsComponent;
  let fixture: ComponentFixture<SeedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
