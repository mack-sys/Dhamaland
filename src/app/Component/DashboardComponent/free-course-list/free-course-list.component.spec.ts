import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourseListComponent } from './free-course-list.component';

describe('FreeCourseListComponent', () => {
  let component: FreeCourseListComponent;
  let fixture: ComponentFixture<FreeCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
