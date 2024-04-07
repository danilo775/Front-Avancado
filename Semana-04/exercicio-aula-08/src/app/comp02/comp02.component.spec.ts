import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp02Component } from './comp02.component';

describe('Comp02Component', () => {
  let component: Comp02Component;
  let fixture: ComponentFixture<Comp02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
