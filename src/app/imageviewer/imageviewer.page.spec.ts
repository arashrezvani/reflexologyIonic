import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageviewerPage } from './imageviewer.page';

describe('ImageviewerPage', () => {
  let component: ImageviewerPage;
  let fixture: ComponentFixture<ImageviewerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
