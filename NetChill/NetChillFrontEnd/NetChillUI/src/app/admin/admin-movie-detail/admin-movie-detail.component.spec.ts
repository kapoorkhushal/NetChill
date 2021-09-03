import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieDetailComponent } from './admin-movie-detail.component';

describe('AdminMovieDetailComponent', () => {
  let component: AdminMovieDetailComponent;
  let fixture: ComponentFixture<AdminMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
