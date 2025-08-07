import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrescriptionultraPage } from './prescriptionultra.page';

describe('PrescriptionultraPage', () => {
  let component: PrescriptionultraPage;
  let fixture: ComponentFixture<PrescriptionultraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionultraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
