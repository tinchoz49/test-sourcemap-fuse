const { FuseBox, WebIndexPlugin, SourceMapPlainJsPlugin } = require('fuse-box');

const plugins = [SourceMapPlainJsPlugin(), WebIndexPlugin()];

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  target: 'browser',
  sourceMaps: true,
  plugins,
  alias: {
    utils: '~/utils'
  },
  cache: false
});

fuse.bundle('app').instructions(`>index.js`);

fuse.dev({
  open: true
});

fuse.run();
