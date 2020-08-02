const path = require("path");

module.exports = {
    entry: ["whatwg-fetch", "./js/app.js"],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    mode: 'development',
    watch: true,
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: "/build/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
