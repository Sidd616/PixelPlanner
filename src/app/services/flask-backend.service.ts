// flask-backend.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlaskBackendService {
  private apiUrl = 'http://127.0.0.1:5000';  // Replace with your Flask server's IP and port

  constructor(private http: HttpClient) { }

  generateGrid(shapes: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate_grid`, { shapes });
  }
}
