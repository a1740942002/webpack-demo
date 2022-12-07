const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.dev.js',
    path: path.resolve(__dirname, 'dist')
  }
}
