import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponentModule } from '../form-component/form-component.module';
import { MapPageModule } from '../map-page/map-page.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-getstarted',
  standalone: true,
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css'],
  imports: [RouterOutlet, RouterLink, FormComponentModule, MapPageModule, CommonModule],
  providers: [HttpClient]
})

@Injectable({
  providedIn: 'root',
})

export class GetstartedComponent implements OnInit {
  title = 'PixelParagon/getstarted';
  isModified: boolean = false;
  imagePath: string | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    // Read the modification status directly from the config.json file
    fetch('http://127.0.0.1:5000/static/config.json')
      .then(response => response.json())
      .then(data => {
        this.isModified = data.modified;

        // Reset data.modified to false
        if (this.isModified) {
          //this.resetModifiedStatus();
        }
        // Set imagePath based on the data received from the backend
        this.imagePath = 'http://127.0.0.1:5000/static/polygon_plot.png';
      })
      .catch(error => {
        console.error('Error reading config.json:', error);
      });
  }

  onClickNavigateTo5000() {
    window.location.href = 'http://127.0.0.1:5000';
  }

  // // Function to reset the modification status to false
  // resetModifiedStatus(): void {
  //   fetch('http://127.0.0.1:5000/static/config.json', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ modified: false }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Modification status reset:', data);
  //     })
  //     .catch(error => {
  //       console.error('Error resetting modification status:', error);
  //     });
  // }

  resetModificationStatus() {
    const postData = {
      shapes: [
        {
          geometry: {
            coordinates: [[]]  // Add your polygon coordinates here
          }
        }
      ]
    };
  
    this.http.post('http://127.0.0.1:5000/generate_grid', postData).subscribe({
      next: (response) => {
        console.log('Config updated successfully:', response);
      },
      error: (error) => {
        console.error('Error updating config:', error);
        // Handle the error (e.g., show a user-friendly message)
      },
      complete: () => {
        // Optional: Handle completion logic if needed
      }
    });
  }
  
}