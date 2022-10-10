import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBookletsComponent } from './custom-booklets.component';

describe('CustomBookletsComponent', () => {
  let component: CustomBookletsComponent;
  let fixture: ComponentFixture<CustomBookletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomBookletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBookletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
