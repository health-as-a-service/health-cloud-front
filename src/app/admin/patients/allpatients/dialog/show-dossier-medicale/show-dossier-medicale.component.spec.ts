import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDossierMedicaleComponent } from './show-dossier-medicale.component';

describe('ShowDossierMedicaleComponent', () => {
  let component: ShowDossierMedicaleComponent;
  let fixture: ComponentFixture<ShowDossierMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDossierMedicaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDossierMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
