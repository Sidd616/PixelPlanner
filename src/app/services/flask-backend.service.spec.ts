// flask-backend.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlaskBackendService } from './flask-backend.service';
import { GeoJSON } from '../map-page/geojson.model';

describe('FlaskBackendService', () => {
  let service: FlaskBackendService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlaskBackendService],
    });
    service = TestBed.inject(FlaskBackendService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP post request', () => {
    const shapes: GeoJSON[] = [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [100, 50],
        },
        properties: { prop1: 'value1' },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [[0, 0], [1, 1], [2, 2]],
        },
        properties: { prop2: 'value2' },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
        },
        properties: { prop3: 'value3' },
      },
    ];

    service.generateGrid(shapes).subscribe();

    const req = httpTestingController.expectOne(`${service['apiUrl']}/generate_grid`);
    expect(req.request.method).toEqual('POST');
    // Add more expectations as needed
  });
});
