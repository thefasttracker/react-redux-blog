import path from 'path'

export default {
	devtools: 'eval-source-map',
	entry: path.join(__dirname, 'client/index.js'),
	output: {
		path: '/'
	},
	module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}