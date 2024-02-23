import { TestBed } from '@angular/core/testing';

import { FlaskBackendService } from './flask-backend.service';

describe('FlaskBackendService', () => {
  let service: FlaskBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
