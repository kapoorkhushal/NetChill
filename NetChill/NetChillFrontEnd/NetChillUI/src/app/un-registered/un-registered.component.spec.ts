import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRegisteredComponent } from './un-registered.component';

describe('UnRegisteredComponent', () => {
  let component: UnRegisteredComponent;
  let fixture: ComponentFixture<UnRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
