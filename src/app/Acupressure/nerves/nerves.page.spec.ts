import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NervesPage } from './nerves.page';

describe('NervesPage', () => {
  let component: NervesPage;
  let fixture: ComponentFixture<NervesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NervesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
