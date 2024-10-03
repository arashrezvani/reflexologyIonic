import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationMoonPage } from './calculation-moon.page';

describe('CalculationMoonPage', () => {
  let component: CalculationMoonPage;
  let fixture: ComponentFixture<CalculationMoonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationMoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
