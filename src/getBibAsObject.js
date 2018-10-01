/*
	Coded on: 1 Oct 2018, Tue
*/
const fs = require("fs"); // File system module

module.exports = function getBibAsObject(bibFilePath) {

	// console.log(fs.existsSync(bibFilePath));
	// console.log(process.cwd());

	if(!fs.existsSync(bibFilePath)){
		console.log("Path: " + bibFilePath + " does not exist");
		return null;
	};

	// console.log("Path " + bibFilePath + "exists");
	var data = fs.readFileSync(bibFilePath, 'utf-8')
	// console.log(data);

	data =  data.trim();
	// console.log(typeof data.trim());

	// console.log(data);

	let arr = data.match(/\w+\s*=\s*("|\{).*("|\})/g);
	// console.log(arr);

	let obj = {};

	// Entry type
	/* EXAMPLES

		1.	@misc{Nobody06,author="NobodyJr",title="MyArticle",year="2006"}
		2.	@book{spwi95,year={1995},author={Brinkley,Richard},editor={Spade,PaulVincentandWilson,GordonA.},title={RichardBrinkley'sObligationes:ALateFourteenthCenturyTreatiseontheLogicofDisputation},series={Beitr\"{a}gezurGeschichtederPhilosophieundTheologiedesMittelalters,neueFolge},volume={43},address={M\"{u}nsteri.W.},publisher={Aschendorff},flanguage={Language},translator={Lastname,Firstname}}
	*/
	var key = data.match(/^@\w+/g)[0].slice(1);
	obj["entryType"] = key;

	// console.log(data.slice(key.length+2));
	// console.log(data.slice(key.length+2).indexOf(','));

	obj["key"] = data.slice(key.length+2, data.indexOf(","));
	obj["data"] = {};

	arr.forEach((item) => {
		let arr1 = item.split(',');
		// console.log(arr1);

		arr1.forEach((item2) => {
			let arr2 = item2.split('=');
			// console.log(arr2);
			 // arr2[1].trim().replace(/(^"|^\{)|("*$|\}*$)/g, '');

			let value = arr2[1].trim().replace(/["\}\{]/g, "").trim();

			if(/^\d+$/g.test(value))
				obj["data"][arr2[0]] = parseInt(value);
			else
				obj.data[arr2[0]] = value;
		});
	});

	// console.log(obj);

	return obj;
}

/*
	@book{spwi95,year={1995},author={Brinkley,Richard},editor={Spade,PaulVincentandWilson,GordonA.},title={RichardBrinkley'sObligationes:ALateFourteenthCenturyTreatiseontheLogicofDisputation},series={Beitr\"{a}gezurGeschichtederPhilosophieundTheologiedesMittelalters,neueFolge},volume={43},address={M\"{u}nsteri.W.},publisher={Aschendorff},flanguage={Language},translator={Lastname,Firstname}}
*/
