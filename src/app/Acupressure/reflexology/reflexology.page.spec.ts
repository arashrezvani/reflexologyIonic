import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReflexologyPage } from './reflexology.page';

describe('ReflexologyPage', () => {
  let component: ReflexologyPage;
  let fixture: ComponentFixture<ReflexologyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
