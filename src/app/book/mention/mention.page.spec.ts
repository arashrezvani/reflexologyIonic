import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionPage } from './mention.page';

describe('MentionPage', () => {
  let component: MentionPage;
  let fixture: ComponentFixture<MentionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
