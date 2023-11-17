import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyStandardComponent } from './safety-standard.component';

describe('SafetyStandardComponent', () => {
  let component: SafetyStandardComponent;
  let fixture: ComponentFixture<SafetyStandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyStandardComponent]
    });
    fixture = TestBed.createComponent(SafetyStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
