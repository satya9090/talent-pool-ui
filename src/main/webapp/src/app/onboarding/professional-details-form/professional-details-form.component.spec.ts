import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDetailsFormComponent } from './professional-details-form.component';

describe('ProfessionalDetailsFormComponent', () => {
  let component: ProfessionalDetailsFormComponent;
  let fixture: ComponentFixture<ProfessionalDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
