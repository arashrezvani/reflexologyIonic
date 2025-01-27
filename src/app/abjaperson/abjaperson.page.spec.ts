import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbjapersonPage } from './abjaperson.page';

describe('AbjapersonPage', () => {
  let component: AbjapersonPage;
  let fixture: ComponentFixture<AbjapersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbjapersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
