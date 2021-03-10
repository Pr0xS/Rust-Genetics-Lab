import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifullGeneticsComponent } from './beautifull-genetics.component';

describe('BeautifullGeneticsComponent', () => {
  let component: BeautifullGeneticsComponent;
  let fixture: ComponentFixture<BeautifullGeneticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifullGeneticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifullGeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
