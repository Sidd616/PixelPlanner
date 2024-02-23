// import { Component, OnInit } from '@angular/core';
// import { FlaskBackendService } from '../services/flask-backend.service';

// @Component({
//   selector: 'app-map-page',
//   templateUrl: './map-page.component.html',
//   styleUrls: ['./map-page.component.css']
// })
// export class MapPageComponent implements OnInit {

//   constructor(private flaskBackendService: FlaskBackendService) { }

//   ngOnInit(): void {
//     // Leaflet map initialization code
//     // Add any additional Angular component logic here
//   }

//   onEnterButtonClick(): void {
//     // Call the Flask backend service
//     // Example: this.flaskBackendService.generateGrid(shapes).subscribe(response => console.log(response));
//   }
// }

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FlaskBackendService } from '../services/flask-backend.service';
import * as L from 'leaflet';
import { GeoJSON } from './geojson.model';
import * as M from 'leaflet-control-geocoder'
// import 'leaflet-routing-machine';


@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit, AfterViewInit {

  loadScriptz() {
    const dynamicScripts = [
      "https://cdnjs.cloudflare.cbom/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js",
      "https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js",
      "https://unpkg.com/leaflet.locatecontrol/dist/L.Control.Locate.min.js",
      "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor(private flaskBackendService: FlaskBackendService) {
    this.loadScriptz();
   }

  ngOnInit(): void {
    // Leaflet map initialization code
    this.loadScripts();
    // this.initializeMap();
  }
  

  ngAfterViewInit(): void {
    // Leaflet map initialization code
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    L.Control.geocoder().addTo(map);

    // Add locate control
    L.control.locate().addTo(map);

    var drawnItems = new L.FeatureGroup();
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

    map.on('draw:created', function (e) {
      // Clear existing layers
      drawnItems.clearLayers();

      var layer = e.layer;
      drawnItems.addLayer(layer);
    });

    // Additional logic can go here...
  }

  private loadScripts() {
    // Add your script loading logic here
    const leafletScript = document.createElement('script');
    leafletScript.src = 'node_modules/leaflet/dist/leaflet.js'; // Adjust the path accordingly
    document.body.appendChild(leafletScript);
  
    const drawScript = document.createElement('script');
    drawScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js';
    document.body.appendChild(drawScript);
  
    const geocoderScript = document.createElement('script');
    geocoderScript.src = 'https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js';
    document.body.appendChild(geocoderScript);
  
    const locateScript = document.createElement('script');
    locateScript.src = 'https://unpkg.com/leaflet.locatecontrol/dist/L.Control.Locate.min.js';
    document.body.appendChild(locateScript);
  }
  

  onEnterButtonClick(): void {
    // Call the Flask backend service
    const shapes = this.getShapes(); // Implement a method to get shapes from the map
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
  
    // Iterate through features and push them into the shapes array
    geoJSONData.features.forEach((feature) => {
      shapes.push(feature);
    });
  
    return shapes;
  }
}