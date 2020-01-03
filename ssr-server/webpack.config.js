const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

const server = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  resolve: {
    alias: {
      'Javascript': path.resolve(__dirname, '..', 'app/javascript/'),
      'Src': path.resolve(__dirname, '..', 'app/javascript/src/'),
      'Components': path.resolve(__dirname, '..', 'app/javascript/src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new NodemonPlugin()
  ]
}

// const client = {
//   target: 'web',
//   node: {
//     fs: 'empty',
//     module: 'empty'
//   },
//   resolve: {
//     alias: {
//       'Components': path.resolve(__dirname, '..', '..', 'app/javascript/src/components/')
//     }
//   },
//   entry: path.join(__dirname, 'src/client.js'),
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'client.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       },
//       {
//         test: /\.vue$/,
//         exclude: /node_modules/,
//         use: 'vue-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin()
//   ]
// }

module.exports = [server]
