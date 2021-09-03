import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpcomingMovieComponent } from './admin-upcoming-movie.component';

describe('AdminUpcomingMovieComponent', () => {
  let component: AdminUpcomingMovieComponent;
  let fixture: ComponentFixture<AdminUpcomingMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpcomingMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpcomingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
