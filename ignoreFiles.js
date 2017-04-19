module.exports = function(context) {

	console.log('START IGNOREFILES.JS');

	const fs = require('fs');

	const blackListExtensions = ['psd'];
	const imagesPath = 'platforms\\android\\assets\\www\\assets\\images\\';
	const imagesAndroidPath = imagesPath + 'android\\';

	let imagesArray = fs.readdirSync(imagesPath, {'encoding': 'UTF-8'});
	let imagesAndroidArray = fs.readdirSync(imagesAndroidPath, {'encoding': 'UTF-8'});
	let imagesBlackListArray = [];

	function getBlackListFiles(imagesArray, imagesPath) {
		imagesArray.forEach(function(value) {
		  value = imagesPath + value;
			var valueExtension = value.substr(value.length - 3).toLowerCase();
			if (blackListExtensions.indexOf(valueExtension) != -1) {
				fs.unlinkSync(value);
			}
		});
	}

	getBlackListFiles(imagesArray, imagesPath);
	getBlackListFiles(imagesAndroidArray, imagesAndroidPath);

	console.log('END IGNOREFILES.JS');

}
