module.exports = {
	entry: "./src/index.tsx",
	output: {
			filename: "bundle.js",
			path: __dirname + "/build"
	},
	resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
			loaders: [
					// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
					{
						test: /\.tsx?$/,
						loader: "awesome-typescript-loader",
					}
			]
	},
	externals: {
		react: "React",
		'react-dom': "ReactDOM",
	},
};
