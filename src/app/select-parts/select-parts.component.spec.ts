import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPartsComponent } from './select-parts.component';

describe('SelectPartsComponent', () => {
  let component: SelectPartsComponent;
  let fixture: ComponentFixture<SelectPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
