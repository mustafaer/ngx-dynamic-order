import { TestBed } from '@angular/core/testing';

import { NgxDynamicOrderService } from './ngx-dynamic-order.service';

describe('NgxDynamicOrderService', () => {
  let service: NgxDynamicOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
