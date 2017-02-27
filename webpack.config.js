'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry:{
       app: [ "./assets/src/js/script/script1"]
    },

	output:{

	    path: path.resolve(__dirname, "assets/dist/js/script"),
      //  publicPath: "/assets/",
          // publicPath: 'http://localhost:8080/',
		filename:"bundle.js"
	},


	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery:"jquery"
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
			// ,
			// inject: 'body'
		})
	],

	module:{
		loaders:[ // array of leoaders
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

			//{ test: /\.jpg$/,    loader: "file-loader" },

			 //{ test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
			   //

			/**/
			{
			  test: /\.(jpe?g|gif|png|svg)$/,
			     loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
			},

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }



		]
	},
	// devServer: {
	// 	contentBase: __dirname,
	// 	inline: true
	// },
 devServer : {
    contentBase: './',
    stats: 'minimal'
  }


};