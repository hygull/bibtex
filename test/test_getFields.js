/*
	Created at: 20 Sep 2018, Thu
*/

const bibtex = require("../index");

const bib = new bibtex();

const fields = bib.getFields('article');

// Pretty printing 
console.log(JSON.stringify(fields, null, 4));
