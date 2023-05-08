import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogAddComponent } from './form-dialog-add.component';

describe('FormDialogAddComponent', () => {
  let component: FormDialogAddComponent;
  let fixture: ComponentFixture<FormDialogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
