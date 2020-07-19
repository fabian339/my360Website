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
  const instructionsSurface = new Surface(600, 700, Surface.SurfaceShape.Flat);
  const educationSurface = new Surface(400, 400, Surface.SurfaceShape.Flat);
  //Buttons interfaces
  const viewResumeButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const viewSkillButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const backToFrontButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const viewQuickTourButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const viewQaButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);
  const viewInstructionButtonSurface = new Surface(800, 600, Surface.SurfaceShape.Flat);

  leftPanel.setAngle(-1.3, -.15);
  skillSurface.setAngle(-3.25, -.1);
  imageSurface.setAngle(0, -0.03);
  instructionsSurface.setAngle(0, -1.6);
  educationSurface.setAngle(2.1, 0.3);
  //buttons angle
  viewResumeButtonSurface.setAngle(1.65, -0.2);
  viewSkillButtonSurface.setAngle(1.3, -0.2);
  backToFrontButtonSurface.setAngle(-2.9, -0.4);
  viewQuickTourButtonSurface.setAngle(0, -0.26);
  viewInstructionButtonSurface.setAngle(0.76, -0.26);
  viewQaButtonSurface.setAngle(2.45, -0.215);


  r360.renderToSurface(
    r360.createRoot('educationSurface'),
    educationSurface,
  );

  r360.renderToSurface(
    r360.createRoot('instructionsSurface'),
    instructionsSurface,
  );


  r360.renderToSurface(
    r360.createRoot('viewQaButtonSurface'),
    viewQaButtonSurface,
  );

  r360.renderToSurface(
    r360.createRoot('viewInstructionButtonSurface'),
    viewInstructionButtonSurface,
  );

  r360.renderToSurface(
    r360.createRoot('viewQuickTourButtonSurface'),
    viewQuickTourButtonSurface,
  );

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

  // r360._cameraQuat = [-0.7346232715033357, -0.007038705675748206, -0.0076220934154369435, 0.6783959089500124];

  r360.compositor.setBackground(r360.getAssetURL('room.jpg'));
}

class CustomLinkingModule extends Module {
  constructor() {
    super('CustomLinkingModule');

  }
  backToFronr(){
            // console.log(r360.getCameraQuaternion());
    r360._cameraPosition = [0, 0, 0];
    r360._cameraQuat = [0, 0,  0, 1];
  }

  goToSiteInstructions(){
    r360._cameraQuat = [-0.7346232715033357, -0.007038705675748206, -0.0076220934154369435, 0.6783959089500124];
    // console.log(r360.getCameraQuaternion());
  }

  goToSkills(){
    r360._cameraQuat = [0.0008605940490944271, -0.998902061317027, 0.02038486997073503, 0.04217094201884789];
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

