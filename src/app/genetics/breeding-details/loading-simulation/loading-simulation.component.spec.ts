import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSimulationComponent } from './loading-simulation.component';

describe('LoadingSimulationComponent', () => {
  let component: LoadingSimulationComponent;
  let fixture: ComponentFixture<LoadingSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
