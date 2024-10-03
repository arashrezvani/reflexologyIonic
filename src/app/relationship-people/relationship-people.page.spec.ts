import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelationshipPeoplePage } from './relationship-people.page';

describe('RelationshipPeoplePage', () => {
  let component: RelationshipPeoplePage;
  let fixture: ComponentFixture<RelationshipPeoplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
