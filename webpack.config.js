var webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
       app: [ "./assets/src/js/script/script1"]
    },

	output:{

	    path: path.resolve(__dirname, "assets/dist/js/script"),
      //  publicPath: "/assets/",
		filename:"bundle.js"
	},


	plugins: [
	        new webpack.ProvidePlugin({
	            $: "jquery",
	            jQuery:"jquery"
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





		]
	},
	// devServer: {
	// 	contentBase: __dirname,
	// 	inline: true
	// },


};