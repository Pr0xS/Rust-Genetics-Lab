import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticsInputComponent } from './genetics-input.component';

describe('GeneticsInputComponent', () => {
  let component: GeneticsInputComponent;
  let fixture: ComponentFixture<GeneticsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
