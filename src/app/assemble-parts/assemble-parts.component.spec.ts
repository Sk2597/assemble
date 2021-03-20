import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblePartsComponent } from './assemble-parts.component';

describe('AssemblePartsComponent', () => {
  let component: AssemblePartsComponent;
  let fixture: ComponentFixture<AssemblePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblePartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
