import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquriesComponent } from './new-enquries.component';

describe('NewEnquriesComponent', () => {
  let component: NewEnquriesComponent;
  let fixture: ComponentFixture<NewEnquriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnquriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEnquriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
