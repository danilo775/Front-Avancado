import { TestBed } from '@angular/core/testing';

import { FuncionalInterceptor } from './funcional.interceptor';

describe('FuncionalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FuncionalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FuncionalInterceptor = TestBed.inject(FuncionalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
