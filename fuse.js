const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const { FuseBox, WebIndexPlugin } = require('fuse-box');

const plugins = [WebIndexPlugin()];

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  target: 'browser',
  sourceMaps: true,
  plugins,
  alias: {
    utils: '~/utils'
  }
});

fuse.bundle('app').instructions(`>index.js`);

fuse.dev({
  open: true
});

fuse.run();
