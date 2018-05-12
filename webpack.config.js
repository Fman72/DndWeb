var Path = require("path");

module.exports = {
    entry: "./build/index.js",
    output: {
        path: Path.resolve("./public"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {extensions: ['.js']},
    node: {fs: "empty", net: "empty"}
};
