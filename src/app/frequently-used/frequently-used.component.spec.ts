import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyUsedComponent } from './frequently-used.component';

describe('FrequentlyUsedComponent', () => {
  let component: FrequentlyUsedComponent;
  let fixture: ComponentFixture<FrequentlyUsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentlyUsedComponent]
    });
    fixture = TestBed.createComponent(FrequentlyUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
