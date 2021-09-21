import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibracionComponent } from './vibracion.component';

describe('VibracionComponent', () => {
  let component: VibracionComponent;
  let fixture: ComponentFixture<VibracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VibracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
