import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsAreaComponent } from './facts-area.component';

describe('FactsAreaComponent', () => {
  let component: FactsAreaComponent;
  let fixture: ComponentFixture<FactsAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsAreaComponent]
    });
    fixture = TestBed.createComponent(FactsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
