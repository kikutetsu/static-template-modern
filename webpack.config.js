const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV || 'production',
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, './dest')
  },
  entry: './src/assets/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dest/assets')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'Android >= 4']
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
    new CopyWebpackPlugin(
      [
        {
          from: '',
          to: '../',
          ignore: ['!*.html']
        }
      ],
      { context: 'src' }
    ),
    new CopyWebpackPlugin(
      [
        {
          from: '',
          to: 'images/'
        }
      ],
      { context: 'src/assets/images' }
    )
  ]
};
