import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscoursesComponent } from './detailscourses.component';

describe('DetailscoursesComponent', () => {
  let component: DetailscoursesComponent;
  let fixture: ComponentFixture<DetailscoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
