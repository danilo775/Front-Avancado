import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPordutoComponent } from './cadastro-porduto.component';

describe('CadastroPordutoComponent', () => {
  let component: CadastroPordutoComponent;
  let fixture: ComponentFixture<CadastroPordutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPordutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPordutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
