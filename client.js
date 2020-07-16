// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const leftPanel = new Surface(400, 600, Surface.SurfaceShape.Flat);
  const imageSurface = new Surface(400, 400, Surface.SurfaceShape.Flat);
  const StorySurface = new Surface(400, 400, Surface.SurfaceShape.Flat);


  leftPanel.setAngle(-1.15, -.15);
  imageSurface.setAngle(0, -0.03);
  StorySurface.setAngle(-1.7, 0);

  r360.renderToSurface(
    r360.createRoot('leftPanel'),
    leftPanel,
  );

  r360.renderToSurface(
    r360.createRoot('imageSurface'),
    imageSurface,
  );

  r360.renderToSurface(
    r360.createRoot('StorySurface'),
    StorySurface,
  );


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('my360App'),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('room.jpg'));
}

window.React360 = {init};
