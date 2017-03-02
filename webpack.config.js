'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');



module.exports = {
	entry:{
       app: [ "./src/js/app/app"]
    },

	output:{
	    path: path.resolve(__dirname, "./dist/app"),
		filename:"bundle.js",
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery:"jquery"
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],

	module:{
		loaders:[ 
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: "babel-loader",
				query:{
					presets:["es2015"]
				}
			},

			{
				test: /\.scss$/,
				loaders: "style-loader!css-loader!sass-loader"
			},

			{
				test: /\.html$/, 
				loader: "html-loader" 
			},

			{
				test: /\.(png|jpg)$/,
				loaders: 'url-loader',
			},

			{
				test: /\.(svg)$/,
				loader: 'file-loader'
			}

		]
	},

	devServer : {
		contentBase: './',
		stats: 'minimal',
		port: 9000
	}
};


