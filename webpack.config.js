
module.exports = {
     output: {
        filename: 'main.js'
     },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/
        }]
    },

};
