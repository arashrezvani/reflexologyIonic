import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReflexologymainPage } from './reflexologymain.page';

describe('ReflexologymainPage', () => {
  let component: ReflexologymainPage;
  let fixture: ComponentFixture<ReflexologymainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexologymainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
