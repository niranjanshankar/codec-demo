import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CspAgreementFormComponent } from './csp-agreement-form.component';

describe('CspAgreementFormComponent', () => {
  let component: CspAgreementFormComponent;
  let fixture: ComponentFixture<CspAgreementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CspAgreementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CspAgreementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
