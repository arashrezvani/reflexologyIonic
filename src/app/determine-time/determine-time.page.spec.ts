import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetermineTimePage } from './determine-time.page';

describe('DetermineTimePage', () => {
  let component: DetermineTimePage;
  let fixture: ComponentFixture<DetermineTimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetermineTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
