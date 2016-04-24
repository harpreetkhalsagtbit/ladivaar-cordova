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
				command: 'cordova run browser'
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

		var tatkraList = [{
			"label": "ਜਪੁ",
			"hash": "srigurugranthsahibjee_ang_1"
		}, {
			"label": "ਸੋ ਦਰੁ",
			"hash": "srigurugranthsahibjee_ang_8"
		}, {
			"label": "ਸੋ ਪੁਰਖੁ",
			"hash": "srigurugranthsahibjee_ang_10"
		}, {
			"label": "ਸੋਹਿਲਾ",
			"hash": "srigurugranthsahibjee_ang_12"
		}, {
			"label": "ਸਿਰੀਰਾਗੁ",
			"hash": "srigurugranthsahibjee_ang_14"
		}, {
			"label": "ਰਾਗੁਮਾਝ",
			"hash": "srigurugranthsahibjee_ang_94"
		}, {
			"label": "ਰਾਗੁਗਉੜੀ",
			"hash": "srigurugranthsahibjee_ang_151"
		}, {
			"label": "ਰਾਗੁਆਸਾ",
			"hash": "srigurugranthsahibjee_ang_347"
		}, {
			"label": "ਰਾਗੁਗੂਜਰੀ",
			"hash": "srigurugranthsahibjee_ang_489"
		}, {
			"label": "ਰਾਗੁਦੇਵਗੰਧਾਰੀ",
			"hash": "srigurugranthsahibjee_ang_527"
		}, {
			"label": "ਰਾਗੁਬਿਹਾਗੜਾ",
			"hash": "srigurugranthsahibjee_ang_537"
		}, {
			"label": "ਰਾਗੁਵਡਹੰਸੁ",
			"hash": "srigurugranthsahibjee_ang_557"
		}, {
			"label": "ਰਾਗੁਸੋਰਠਿ",
			"hash": "srigurugranthsahibjee_ang_595"
		},{
			"label":"ਰਾਗੁਧਨਾਸਰੀ",
			"hash":"srigurugranthsahibjee_ang_660"
		},{
			"label":"ਰਾਗੁਜੈਤਸਰੀ",
			"hash":"srigurugranthsahibjee_ang_696"
		},{
			"label":"ਰਾਗੁਟੋਡੀ",
			"hash":"srigurugranthsahibjee_ang_711"
		},{
			"label":"ਰਾਗੁਬੈਰਾੜੀ",
			"hash":"srigurugranthsahibjee_ang_719"
		},{
			"label":"ਰਾਗੁਤਿਲੰਗ",
			"hash":"srigurugranthsahibjee_ang_721"
		},{
			"label":"ਰਾਗੁਸੂਹੀ",
			"hash":"srigurugranthsahibjee_ang_728"
		},{
			"label":"ਰਾਗੁਬਿਲਾਵਲੁ",
			"hash":"srigurugranthsahibjee_ang_795"
		},{
			"label":"ਰਾਗੁਗੋਂਡ",
			"hash":"srigurugranthsahibjee_ang_859"
		},{
			"label":"ਰਾਗੁਰਾਮਕਲੀ",
			"hash":"srigurugranthsahibjee_ang_876"
		},{
			"label":"ਰਾਗੁਨਟਨਾਰਾਇਨ",
			"hash":"srigurugranthsahibjee_ang_975"
		},{
			"label":"ਰਾਗੁਮਾਲੀਗਉੜਾ",
			"hash":"srigurugranthsahibjee_ang_984"
		},{
			"label":"ਰਾਗੁਮਾਰੂ",
			"hash":"srigurugranthsahibjee_ang_989"
		},{
			"label":"ਰਾਗੁਤੁਖਾਰੀ",
			"hash":"srigurugranthsahibjee_ang_1107"
		},{
			"label":"ਰਾਗੁਕੇਦਾਰਾ",
			"hash":"srigurugranthsahibjee_ang_1118"
		},{
			"label":"ਰਾਗੁਭੈਰਉ",
			"hash":"srigurugranthsahibjee_ang_1125"
		},{
			"label":"ਰਾਗੁਬਸੰਤੁ",
			"hash":"srigurugranthsahibjee_ang_1168"
		},{
			"label":"ਰਾਗੁਸਾਰਗ",
			"hash":"srigurugranthsahibjee_ang_1197"
		},{
			"label":"ਰਾਗੁਮਲਾਰ",
			"hash":"srigurugranthsahibjee_ang_1254"
		},{
			"label":"ਰਾਗੁਕਾਨੜਾ",
			"hash":"srigurugranthsahibjee_ang_1294"
		},{
			"label":"ਰਾਗੁਕਲਿਆਨ",
			"hash":"srigurugranthsahibjee_ang_1319"
		},{
			"label":"ਰਾਗੁਪ੍ਰਭਾਤੀ",
			"hash":"srigurugranthsahibjee_ang_1327"
		},{
			"label":"ਰਾਗੁਜੈਜਾਵੰਤੀ",
			"hash":"srigurugranthsahibjee_ang_1352"
		},{
			"label":"ਸਲੋਕਸਹਸਕ੍ਰਿਤੀਮਹਲਾ੧",
			"hash":"srigurugranthsahibjee_ang_1353"
		},{
			"label":"ਸਲੋਕਸਹਸਕ੍ਰਿਤੀਮਹਲਾ੫",
			"hash":"srigurugranthsahibjee_ang_1353"
		},{
			"label":"ਮਹਲਾ੫ਗਾਥਾ",
			"hash":"srigurugranthsahibjee_ang_1360"
		},{
			"label":"ਫੁਨਹੇਮਹਲਾ੫",
			"hash":"srigurugranthsahibjee_ang_1361"
		},{
			"label":"ਚਉਬੋਲੇਮਹਲਾ੫",
			"hash":"srigurugranthsahibjee_ang_1363"
		},{
			"label":"ਸਲੋਕਭਗਤਕਬੀਰਜੀਉਕੇ",
			"hash":"srigurugranthsahibjee_ang_1364"
		},{
			"label":"ਸਲੋਕਸੇਖਫਰੀਦਕੇ",
			"hash":"srigurugranthsahibjee_ang_1377"
		},{
			"label":"ਸਵਯੇਸ੍ਰੀਮੁਖਬਾਕਮਹਲਾ੫",
			"hash":"srigurugranthsahibjee_ang_1385"
		},{
			"label":"ਸਲੋਕਵਾਰਾਂਤੇਵਧੀਕ",
			"hash":"srigurugranthsahibjee_ang_1410"
		},{
			"label":"ਸਲੋਕਮਹਲਾ੯",
			"hash":"srigurugranthsahibjee_ang_1426"
		},{
			"label":"ਮੁੰਦਾਵਣੀਮਹਲਾ੫",
			"hash":"srigurugranthsahibjee_ang_1429"
		}, {
			"label":"ਰਾਗਮਾਲਾ",
			"hash":"srigurugranthsahibjee_ang_1429"
		}]

		var source = fs.readFileSync(path.normalize("template/index.html")).toString();
		var template = handlebars.compile(source);
		var html = template({
			homePageList: mainPageListing,
			nitnemPageList: nitnemPageListing,
			tatkraList: tatkraList
		});

		fs.writeFileSync(path.normalize("www/index.html"), html);
	});

	require('load-grunt-tasks')(grunt);

	// Default task(s).
	grunt.registerTask('default', ['generateHTML', 'shell:start_cordova_browser']);
	grunt.registerTask('run', ['shell:start_cordova_browser']);
};