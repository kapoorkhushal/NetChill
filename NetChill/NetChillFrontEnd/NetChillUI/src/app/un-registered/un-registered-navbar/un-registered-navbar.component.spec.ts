import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRegisteredNavbarComponent } from './un-registered-navbar.component';

describe('UnRegisteredNavbarComponent', () => {
  let component: UnRegisteredNavbarComponent;
  let fixture: ComponentFixture<UnRegisteredNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnRegisteredNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRegisteredNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
