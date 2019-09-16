const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/app.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"],
                        "plugins": [["@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }]]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx']
    }
};