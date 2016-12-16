var path = require('path');
module.exports = {
	entry:"./src/main.js",
	output:{
		path:path.resolve(__dirname,'./dist'),
		publicPath:'/dist/',
		filename:'build.js'
	},
	module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue',

            },
            {
			    test: /\.css$/,
			    loader: 'vue-style!css'
			}
        ]

}
}
