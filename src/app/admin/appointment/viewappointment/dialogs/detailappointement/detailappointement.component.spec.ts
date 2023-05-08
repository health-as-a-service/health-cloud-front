import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailappointementComponent } from './detailappointement.component';

describe('DetailappointementComponent', () => {
  let component: DetailappointementComponent;
  let fixture: ComponentFixture<DetailappointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailappointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailappointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
