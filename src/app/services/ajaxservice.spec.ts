import { TestBed } from '@angular/core/testing';

import { AjaxService } from './ajaxservice';

describe('AjaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxService= TestBed.get(AjaxService);
    expect(service).toBeTruthy();
  });
});
