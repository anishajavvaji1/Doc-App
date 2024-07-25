import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCodesComponent } from './clinical-codes.component';

describe('ClinicalCodesComponent', () => {
  let component: ClinicalCodesComponent;
  let fixture: ComponentFixture<ClinicalCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicalCodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicalCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
