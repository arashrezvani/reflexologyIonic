import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigestivePage } from './digestive.page';

describe('DigestivePage', () => {
  let component: DigestivePage;
  let fixture: ComponentFixture<DigestivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
