import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('SlideshowSample', {
      photos: [
        {uri: './static_assets/360_world.jpg', title: '360 World', format: '2D'},
        {uri: './static_assets/R0010090.jpg', title: 'The Press Room', format: '2D'},
        // {uri: './static_assets/R0010091.jpg', title: '360 World', format: '2D'},
        {uri: './static_assets/R0010092.jpg', title: 'The Main Attrium', format: '2D'},
        {uri: './static_assets/R0010093.jpg', title: 'The Courtroom', format: '2D'},
        {uri: './static_assets/R0010094.jpg', title: 'State Representatives Work Here', format: '2D'},
        // {uri: './static_assets/R0010095.jpg', title: '360 World', format: '2D'},
        {uri: './static_assets/R0010096.jpg', title: 'The Roof #1', format: '2D'},
        {uri: './static_assets/R0010097.jpg', title: 'The Roof #2: View of Saint Paul', format: '2D'},
        {uri: './static_assets/R0010098.jpg', title: 'The Roof #3: Golden Horses', format: '2D'},
        {uri: './static_assets/R0010099.jpg', title: 'The Roof #4: Minneapolis', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};
