import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameloComponent } from './camelo.component';

describe('CameloComponent', () => {
  let component: CameloComponent;
  let fixture: ComponentFixture<CameloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CameloComponent]
    });
    fixture = TestBed.createComponent(CameloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
