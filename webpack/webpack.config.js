const loaders = require('./loaders');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const devBuild = process.env.NODE_ENV === 'dev';
console.log(`Starting webpack build with NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = {
    entry: [
        path.resolve('./src/app/pacman.ts')
    ],
    output: {
        path: path.resolve('./build/web/'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['src/app', 'src/html', 'src/css', 'node_modules']
    },
    mode: devBuild ? 'development' : 'production',
    devtool: devBuild ? 'source-map' : undefined,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: 'src/res', to: 'res' }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            inject: 'body',
            hash: true
        })
    ],
    module: {
        rules: loaders
    },
    // Create sourcemaps for the bundle
    devServer: {
        contentBase: './build/web'
    }
};
