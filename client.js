// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';
let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new CustomLinkingModule()
    ],
    ...options,
  });
  const leftPanel = new Surface(1050, 1000, Surface.SurfaceShape.Flat);
  const skillSurface = new Surface(1024, 1050, Surface.SurfaceShape.Flat);
  const imageSurface = new Surface(400, 400, Surface.SurfaceShape.Flat);
  //Buttons interfaces
  const viewResumeButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const viewSkillButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const backToFrontButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);


  leftPanel.setAngle(-1.3, -.15);
  skillSurface.setAngle(-3.25, -.1);
  imageSurface.setAngle(0, -0.03);
  viewResumeButtonSurface.setAngle(1.65, -0.2);
  viewSkillButtonSurface.setAngle(1.3, -0.2);
  backToFrontButtonSurface.setAngle(-2.9, -0.4);

  r360.renderToSurface(
    r360.createRoot('backToFrontButtonSurface'),
    backToFrontButtonSurface,
  );

  r360.renderToSurface(
    r360.createRoot('viewSkillButtonSurface'),
    viewSkillButtonSurface,
  );

  r360.renderToSurface(
    r360.createRoot('viewResumeButtonSurface'),
    viewResumeButtonSurface,
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

  r360.compositor.setBackground(r360.getAssetURL('room.jpg'));
}

class CustomLinkingModule extends Module {
  constructor() {
    super('CustomLinkingModule');

  }
  backToFronr(){
    r360._cameraPosition = [0, 0, 0];
    r360._cameraQuat = [0, 0,  0, 1];
  }

  goToSkills(){
    r360._cameraPosition = [0, 0, 0];
    r360._cameraQuat = [0, 1,  0, 0];
  }

  open(url) {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      window.location = new URL(url, window.location);
    }
    if (
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      window.location = new URL(url, window.location);
    }
      window.open(url) 
  }
    
}


window.React360 = {init};

