import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictStudentsComponent } from './restrict-students.component';

describe('RestrictStudentsComponent', () => {
  let component: RestrictStudentsComponent;
  let fixture: ComponentFixture<RestrictStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
