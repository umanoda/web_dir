// Ref. http://techlife.cookpad.com/entry/2016/07/27/101015
module.exports = {
  entry: {
    app: './src/index.jsx',
  },

  output: {
    path: '../app/assets/javascripts/webpack',
    filename: '[name].js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'es2016', 'react'],
        },
      },
    ],
  },
}
