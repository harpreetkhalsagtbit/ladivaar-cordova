'use strict';
var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars')

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			start_cordova_browser: {
				command: 'sudo cordova run browser'
			}
		}
	});

	grunt.registerTask('generateHTML', function() {
		var mainPageListing = [{
			"label": "Sri Guru Granth Sahib Jee",
			"hash": "srigurugranthsahibjee"
		}, {
			"label": "Nitnem",
			"hash": "nitnem"
		}]

		var nitnemPageListing = [{
			"label": "Jap Jee Sahib",
			"hash": "nitnem_japjeesahib"
		}, {
			"label": "Jaap Sahib",
			"hash": "nitnem_jaapsahib"
		}, {
			"label": "Tav Prasad Savaiye",
			"hash": "nitnem_tavprasadsavaiye"
		}, {
			"label": "Chaupai Sahib",
			"hash": "nitnem_chaupaisahib"
		}, {
			"label": "Anand Sahib",
			"hash": "nitnem_anandsahib"
		}, {
			"label": "Rehras Sahib",
			"hash": "nitnem_rehrassahib"
		}, {
			"label": "Sohila Sahib",
			"hash": "nitnem_sohilasahib"
		}]

		var source = fs.readFileSync(path.normalize("template/index.html")).toString();
		var template = handlebars.compile(source);
		var html = template({
			homePageList: mainPageListing,
			nitnemPageList: nitnemPageListing
		});

		fs.writeFileSync(path.normalize("www/index.html"), html);
	});

	require('load-grunt-tasks')(grunt);

	// Default task(s).
	grunt.registerTask('default', ['generateHTML', 'shell:start_cordova_browser']);
	grunt.registerTask('run', ['shell:start_cordova_browser']);
};