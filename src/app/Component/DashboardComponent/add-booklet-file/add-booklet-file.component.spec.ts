import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookletFileComponent } from './add-booklet-file.component';

describe('AddBookletFileComponent', () => {
  let component: AddBookletFileComponent;
  let fixture: ComponentFixture<AddBookletFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookletFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookletFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
