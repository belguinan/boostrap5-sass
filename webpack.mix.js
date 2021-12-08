const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const mix = require('laravel-mix');

mix.webpackConfig({
    output: {
        publicPath: 'auto',
        chunkFilename: 'js/[name].[chunkhash].js',      
    }
})

mix.js('resources/js/app.js', 'public/js').vue({
        version: 2
    })
    .sass('resources/sass/app.scss', 'public/css')