import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlaskBackendService } from '../services/flask-backend.service';
import { GeoJSON } from './geojson.model';

declare const L: any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit, AfterViewInit {

  constructor(
    private flaskBackendService: FlaskBackendService,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private async loadScripts() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const leaflet = await import('leaflet');
        const leafletDraw = await import('leaflet-draw');
        const geocoder = await import('leaflet-control-geocoder');

        // Import types dynamically for leaflet.locatecontrol
        const locateControlTypes = await import('leaflet.locatecontrol');
        const locateControl = await import('leaflet.locatecontrol');

        // Leaflet map initialization code
        this.ngZone.runOutsideAngular(() => {
          var map = leaflet.map('map').setView([51.505, -0.09], 13);
          leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Add search control
          L.Control.geocoder().addTo(map);

          // Add locate control
          L.control.locate().addTo(map);

          var drawnItems = new leaflet.FeatureGroup();
          map.addLayer(drawnItems);
          var drawControl = new L.Control.Draw({
            draw: {
              polyline: false,
              polygon: true,
              rectangle: false,
              circle: false,
              marker: false
            },
            edit: {
              featureGroup: drawnItems
            }
          });
          map.addControl(drawControl);

          map.on('draw:created', (e: any) => {
            this.ngZone.run(() => {
              // Clear existing layers
              drawnItems.clearLayers();

              var layer = e.layer;
              drawnItems.addLayer(layer);
            });
          });
        });
      } catch (error) {
        console.error('Error loading Leaflet scripts:', error);
      }
    }
  }

  ngOnInit(): void {
    this.loadScripts();
  }

  ngAfterViewInit(): void {
    // Additional initialization code if needed
    if (isPlatformBrowser(this.platformId)) {
      // Additional code if needed
    }
  }

  onEnterButtonClick(): void {
    // Call the Flask backend service
    const shapes = this.getShapes();
    this.flaskBackendService.generateGrid(shapes).subscribe(response => {
      console.log(response);
      // Handle the response as needed
    });
  }

  private getShapes(): GeoJSON[] {
    // Extract shapes from the Leaflet map
    const shapes: GeoJSON[] = [];

    // Example GeoJSON data
    const geoJSONData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [102.0, 0.5],
          },
          properties: {
            prop0: "value0",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0],
            ],
          },
          properties: {
            prop0: "value0",
            prop1: 0.0,
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [100.0, 0.0],
                [101.0, 0.0],
                [101.0, 1.0],
                [100.0, 1.0],
                [100.0, 0.0],
              ],
            ],
          },
          properties: {
            prop0: "value0",
            prop1: {
              this: "that",
            },
          },
        },
      ],
    };

    // Iterate through features
    geoJSONData.features.forEach((feature: GeoJSON) => {
      shapes.push(feature);
    });

    return shapes;
  }
}
