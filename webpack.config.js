var Path = require("path");

module.exports = {
    entry: "./build/index.js",
    output: {
        path: Path.resolve("./public"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: ['', '.js'],
    node: {fs: "empty", net: "empty"}
};
