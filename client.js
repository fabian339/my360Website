// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Location, Surface, Module} from 'react-360-web';
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const leftPanel = new Surface(1024, 1000, Surface.SurfaceShape.Flat);
  imageSurface = new Surface(400, 400, Surface.SurfaceShape.Flat);


  leftPanel.setAngle(-1.3, -.15);
  imageSurface.setAngle(0, -0.03);

  r360.renderToSurface(
    r360.createRoot('leftPanel'),
    leftPanel,
  );


  r360.renderToSurface(
    r360.createRoot('imageSurface'),
    imageSurface,
  );
  // StorySurface.resize(700, 700)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('my360App'),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('room.jpg'));
}


window.React360 = {init};
