import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBoxComponent } from './call-to-action-box.component';

describe('CallToActionBoxComponent', () => {
  let component: CallToActionBoxComponent;
  let fixture: ComponentFixture<CallToActionBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallToActionBoxComponent]
    });
    fixture = TestBed.createComponent(CallToActionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
