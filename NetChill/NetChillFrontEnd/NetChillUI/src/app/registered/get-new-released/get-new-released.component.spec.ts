import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewReleasedComponent } from './get-new-released.component';

describe('GetNewReleasedComponent', () => {
  let component: GetNewReleasedComponent;
  let fixture: ComponentFixture<GetNewReleasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNewReleasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
