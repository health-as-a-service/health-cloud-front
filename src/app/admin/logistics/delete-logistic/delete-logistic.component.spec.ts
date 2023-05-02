import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLogisticComponent } from './delete-logistic.component';

describe('DeleteLogisticComponent', () => {
  let component: DeleteLogisticComponent;
  let fixture: ComponentFixture<DeleteLogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLogisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
