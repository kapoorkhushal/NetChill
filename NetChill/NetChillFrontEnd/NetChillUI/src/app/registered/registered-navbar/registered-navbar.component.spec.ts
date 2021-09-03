import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredNavbarComponent } from './registered-navbar.component';

describe('RegisteredNavbarComponent', () => {
  let component: RegisteredNavbarComponent;
  let fixture: ComponentFixture<RegisteredNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
