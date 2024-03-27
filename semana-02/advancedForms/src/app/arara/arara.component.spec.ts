import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraraComponent } from './arara.component';

describe('AraraComponent', () => {
  let component: AraraComponent;
  let fixture: ComponentFixture<AraraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraraComponent]
    });
    fixture = TestBed.createComponent(AraraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
