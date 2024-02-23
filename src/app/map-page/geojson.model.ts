// geojson.model.ts

export interface GeoJSON {
      type: string;
      geometry: {
        type: string;
        coordinates: number[] | number[][] | number[][][];
      };
      properties?: any;
    }
    