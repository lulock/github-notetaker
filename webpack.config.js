module.exports ={
    // where is root component. point here.
    entry: "./app/App.js",
    output: {
        filename:"public/bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets:['react', 'es2015']
                }
            }
        ]
    }

};