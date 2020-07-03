const path = require( 'path' );
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve( __dirname, 'bundle' ),
        publicPath:'./bundle/',
    },
    optimization: {
        minimize: false,
    }
};

