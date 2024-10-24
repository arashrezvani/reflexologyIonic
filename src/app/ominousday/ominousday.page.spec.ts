import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OminousdayPage } from './ominousday.page';

describe('OminousdayPage', () => {
  let component: OminousdayPage;
  let fixture: ComponentFixture<OminousdayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OminousdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
