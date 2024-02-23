// vite.config.ts

import { defineConfig } from 'vite';

export default defineConfig({
  // ... other configurations ...

  optimizeDeps: {
    include: [
      'leaflet-draw',
      'leaflet.locatecontrol',
      // ... other dependencies ...
    ],
  },
});
