const fs = require("fs");
const path = require("path");
const config = require("./config");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ resource: "./" });

	// 開発環境でのみBrowserSyncの設定を適用
	if (process.env.ELEVENTY_ENV !== 'production') {
		eleventyConfig.setBrowserSyncConfig({
			server: {
				baseDir: 'public'
			},
			files: [
				'public/**/*',
				'src/site/**/*.njk',
				'src/styles/**/*.scss',
				'src/scripts/**/*.js'
			],
			open: true,
			ghostMode: false,
			notify: true,
			port: 8080,
			reloadDelay: 0
		});

		// 開発環境でのみウォッチ対象を追加
		eleventyConfig.addWatchTarget('./src/site/');
		eleventyConfig.addWatchTarget('./src/styles/');
		eleventyConfig.addWatchTarget('./src/scripts/');
	}

	return {
		dir: {
			input: "src/site/pages",
			includes: "../inc",
			layouts: "../inc/layouts",
			data: "../data",
			output: "public",
		},
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		pathPrefix: config.pathPrefix,
	};
};
