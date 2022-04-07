const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');
const packgeInfo = require('../package.json');

const resolve = (dir) => path.resolve(__dirname, '..', dir);

function externalsFromDep() {
  return Object.fromEntries(
    [
      ...Object.keys(packgeInfo.dependencies || {}),
      ...Object.keys(packgeInfo.peerDependencies || {}),
    ]
      .filter((dep) => dep !== 'source-map-support')
      .map((dep) => [dep, dep]),
  );
}

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'source-map',
  target: 'node',
  entry: {
    index: './src/index',
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: {
      type: 'commonjs',
    },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    mainFields: ['main', 'module'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js\.map|d\.ts)$/i,
        exclude: /node_modules/,
        use: ['cache-loader', 'ignore-loader'],
      },
    ],
  },
  externals: {
    ...externalsFromDep(),
  },
  plugins: [
    new WebpackBar({ name: 'WP' }),
    new webpack.DefinePlugin({
      'process.env.CLI_VERSION': JSON.stringify(packgeInfo.version),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.RELEASE_ENV': JSON.stringify(process.env.RELEASE_ENV),
    }),
  ],
};
