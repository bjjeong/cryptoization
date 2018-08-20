var path = require('path');

module.exports = {
    entry: './lib/js/main.js',
    output: {
        path: path.resolve(__dirname, 'lib', 'js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '*']
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    devtool: 'source-map'
};