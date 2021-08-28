import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HospitalizationComponent} from './hospitalization.component';

describe('HospitalizationComponent', () => {
  let component: HospitalizationComponent;
  let fixture: ComponentFixture<HospitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalizationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
