import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeatureMovieComponent } from './admin-feature-movie.component';

describe('AdminFeatureMovieComponent', () => {
  let component: AdminFeatureMovieComponent;
  let fixture: ComponentFixture<AdminFeatureMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeatureMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
