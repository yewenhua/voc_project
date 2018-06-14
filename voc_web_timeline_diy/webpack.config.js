var path = require('path')
var webpack = require('webpack')
var config = require('./src/config')
var entries = config.getEntry();
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',    //打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
    filename: '[name].js'
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'timeline.html',
          template: './www/timeline/timeline.html',
          inject: true,
          chunks: ['timeline']
      }),
      new HtmlWebpackPlugin({
          filename: 'statistic.html', //http访问路径,相对dist目录
          template: './www/statistic/statistic.html', //实际文件路径
          inject: true,
          chunks: ['statistic']
      }),
      new HtmlWebpackPlugin({
          filename: 'lockrecord.html', //http访问路径,相对dist目录
          template: './www/lockrecord/lockrecord.html', //实际文件路径
          inject: true,
          chunks: ['lockrecord']
      }),
      new HtmlWebpackPlugin({
          filename: 'devicelog.html', //http访问路径,相对dist目录
          template: './www/devicelog/devicelog.html', //实际文件路径
          inject: true,
          chunks: ['devicelog']
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name:'www/common/lib', // 注意不要.js后缀,相对dist目录
          chunks: Object.keys(entries)//入口节点entry,这里提取所有节点，可以有选择性的提取，如['main','user','index']
      })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'www/assets/img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
