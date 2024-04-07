import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponent } from './primeiro.component';

describe('PrimeiroComponent', () => {
  let component: PrimeiroComponent;
  let fixture: ComponentFixture<PrimeiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrimeiroComponent]
    });
    fixture = TestBed.createComponent(PrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
