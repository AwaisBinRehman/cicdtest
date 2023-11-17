import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowserComponent } from './bowser.component';

describe('BowserComponent', () => {
  let component: BowserComponent;
  let fixture: ComponentFixture<BowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BowserComponent]
    });
    fixture = TestBed.createComponent(BowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
