import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsFeaturesComponent } from './ts-features.component';

describe('TsFeaturesComponent', () => {
  let component: TsFeaturesComponent;
  let fixture: ComponentFixture<TsFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsFeaturesComponent]
    });
    fixture = TestBed.createComponent(TsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
