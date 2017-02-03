var Path = require("path");

module.exports = {
    entry: "./build/index.js",
    output: {
        path: Path.resolve("./public"),
        filename: "bundle.js"
    },
//    devServer: {
//        contentBase: "public"
//    },
// Using babel separately so don't need this.
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