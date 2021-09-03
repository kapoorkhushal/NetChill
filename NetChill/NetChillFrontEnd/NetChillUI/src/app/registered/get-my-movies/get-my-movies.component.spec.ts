import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyMoviesComponent } from './get-my-movies.component';

describe('GetMyMoviesComponent', () => {
  let component: GetMyMoviesComponent;
  let fixture: ComponentFixture<GetMyMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
