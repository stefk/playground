module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react': __dirname + '/node_modules/react/lib/React.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=1&optional=runtime'
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};
