var Path = require("path");

module.exports = {
    entry: "./build/index.js",
    output: {
        path: Path.resolve("./public"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
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
