import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewReleasesComponent } from './admin-new-releases.component';

describe('AdminNewReleasesComponent', () => {
  let component: AdminNewReleasesComponent;
  let fixture: ComponentFixture<AdminNewReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
