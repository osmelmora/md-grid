const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = {
  resolve: {
    root: [
      path.resolve(ROOT_PATH, 'src'),
      path.resolve(ROOT_PATH, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
};
