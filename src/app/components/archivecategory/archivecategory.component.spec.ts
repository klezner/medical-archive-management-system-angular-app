import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveCategoryComponent} from './archivecategory.component';

describe('ArchiveCategoryComponent', () => {
  let component: ArchiveCategoryComponent;
  let fixture: ComponentFixture<ArchiveCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveCategoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
