const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output : {
        path: path.join(__dirname, '/dist'), 
        filename: 'index_bundle.js'
    }, 
    devServer: {
        port: 3000
      },
      module: {
        loaders: [
          {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
          {loader: 'style-loader!css-loader', test: /\.css$/},
          {loader: 'url-loader', test: /\.gif$/},
          {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
        ],
      },
      resolve: {
        alias: {
          config$: './configs/app-config.js',
          react: './vendor/react-master',
        },
        extensions: ['', 'js', 'jsx'],
        modules: [
          'node_modules',
          'bower_components',
          'shared',
          '/shared/vendor/modules',
        ],
      },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              }
        ]
    }, 
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}