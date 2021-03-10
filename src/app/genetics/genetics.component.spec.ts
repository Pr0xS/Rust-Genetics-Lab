import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticsComponent } from './genetics.component';

describe('GeneticsComponent', () => {
  let component: GeneticsComponent;
  let fixture: ComponentFixture<GeneticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
