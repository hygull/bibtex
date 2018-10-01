'use strict';
const fs = require('fs');


fs.readFile('BibTeX_example02_misc.bib', 'utf-8', (err, data) => {
	console.log(data);

	data =  data.trim();
	console.log(typeof data.trim());

	data = data.replace(/\s+/g, '');

	console.log(data);

	let arr = data.match(/\w+\s*=\s*("|\{).*("|\})/g);
	console.log(arr);

	let obj = {};

	// Entry type
	// @misc{Nobody06,author="NobodyJr",title="MyArticle",year="2006"}
	var key = data.match(/^@\w+/g)[0].slice(1);
	obj["entryType"] = key;
	console.log(data.slice(key.length+2));
	console.log(data.slice(key.length+2).indexOf(','));

	obj["key"] = data.slice(key.length+2, data.indexOf(","));
	obj["data"] = {};

	arr.forEach((item) => {
		let arr1 = item.split(',');
		console.log(arr1);

		arr1.forEach((item2) => {
			let arr2 = item2.split('=');
			obj["data"][arr2[0]] = arr2[1].replace(/(^"|^\{)|("$|\}$)/g, '');
		});
	});

	console.log(obj);

	console.log(JSON.stringify(obj, null, 4))
})