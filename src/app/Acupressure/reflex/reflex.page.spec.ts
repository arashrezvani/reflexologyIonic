import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReflexPage } from './reflex.page';

describe('ReflexPage', () => {
  let component: ReflexPage;
  let fixture: ComponentFixture<ReflexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
