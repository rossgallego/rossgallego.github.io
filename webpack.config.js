'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');



module.exports = {
	entry:{
       app: [ "./src/js/app/app"]
    },

	output:{

	    // path: path.resolve(__dirname, "assets/dist/js/script"),
	    path: path.resolve(__dirname, "./dist/app"),
	    // publicPath: 'http://localhost:9000/',
		filename:"bundle.js",

       	// publicPath: "/test"
        // publicPath: 'http://localhost:8080/',
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
			  {
			  	
			  		test: /\.html$/, 
			  		loader: "html-loader" 
			  	
			  },
			// { test: /\.jpg$/,    loader: "file-loader" },

			 //{ test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
			   //

			/**/

  




		// {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},

// { test: /\.(woff|png|jpg|gif)$/, loader: 'url-loader?limit=10000' },

      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }









      {
          test: /\.(png|jpg)$/,
          loaders: 'url-loader',
        },



// {
//   test: /\.(svg)$/,
//      loader: 'file-loader?emitFile=false&name=./dist/[name].[ext]'

// }
 // {  test: /\.(svg)$/,
 // 	loader: 'svg-url-loader'},


{
  test: /\.(svg)$/,
     loader: 'file-loader'

}

		]
	},

	// devServer: {
	// 	contentBase: __dirname,
	// 	inline: true
	// },
 devServer : {
    contentBase: './',
    stats: 'minimal',
    port: 9000
  }


};