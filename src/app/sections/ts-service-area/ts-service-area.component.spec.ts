import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsServiceAreaComponent } from './ts-service-area.component';

describe('TsServiceAreaComponent', () => {
  let component: TsServiceAreaComponent;
  let fixture: ComponentFixture<TsServiceAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsServiceAreaComponent]
    });
    fixture = TestBed.createComponent(TsServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
