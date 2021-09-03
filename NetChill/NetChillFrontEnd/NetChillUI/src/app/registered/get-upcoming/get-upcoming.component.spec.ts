import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpcomingComponent } from './get-upcoming.component';

describe('GetUpcomingComponent', () => {
  let component: GetUpcomingComponent;
  let fixture: ComponentFixture<GetUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
