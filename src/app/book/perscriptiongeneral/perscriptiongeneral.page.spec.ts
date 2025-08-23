import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerscriptiongeneralPage } from './perscriptiongeneral.page';

describe('PerscriptiongeneralPage', () => {
  let component: PerscriptiongeneralPage;
  let fixture: ComponentFixture<PerscriptiongeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerscriptiongeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
