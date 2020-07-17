// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance,Location, Surface, Module} from 'react-360-web';
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  const leftPanel = new Surface(1050, 1000, Surface.SurfaceShape.Flat);
  const skillSurface = new Surface(1024, 1050, Surface.SurfaceShape.Flat);
  const imageSurface = new Surface(400, 400, Surface.SurfaceShape.Flat);
  const resumeIcon = new Surface(800, 600, Surface.SurfaceShape.Flat);


  leftPanel.setAngle(-1.3, -.15);
  skillSurface.setAngle(-3.25, -.1);
  imageSurface.setAngle(0, -0.03);
  resumeIcon.setAngle(1.65, -0.05);

  r360.renderToSurface(
    r360.createRoot('resumeIcon'),
    resumeIcon,
  );

  r360.renderToSurface(
    r360.createRoot('leftPanel'),
    leftPanel,
  );


  r360.renderToSurface(
    r360.createRoot('imageSurface'),
    imageSurface,
  );

  r360.renderToSurface(
    r360.createRoot('skillSurface'),
    skillSurface,
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
