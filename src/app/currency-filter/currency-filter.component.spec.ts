import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFilterComponent } from './currency-filter.component';

describe('CurrencyFilterComponent', () => {
  let component: CurrencyFilterComponent;
  let fixture: ComponentFixture<CurrencyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
